import fs from 'node:fs';
import path from 'node:path';
import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

const db = sql('meals.db');

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 5000));

    // throw new Error('Loading meals failed');
    return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug) {
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export async function saveMeal(meal) {
    // Generate slug for the meal
    meal.slug = slugify(meal.title, { lower: true });

    // Sanitize instructions
    meal.instructions = xss(meal.instructions);

    // Generate file name and path
    const extension = meal.image.name.split('.').pop();
    const fileName = `${meal.slug}.${extension}`;
    const imagesDir = path.join(process.cwd(), 'public/images');

    // Ensure the directory exists
    if (!fs.existsSync(imagesDir)) {
        fs.mkdirSync(imagesDir, { recursive: true });
    }

    // Save the image to the file system
    const filePath = path.join(imagesDir, fileName);
    const bufferedImage = Buffer.from(await meal.image.arrayBuffer());

    try {
        fs.writeFileSync(filePath, bufferedImage);
        console.log(`Image saved successfully at ${filePath}`);
    } catch (error) {
        console.error('Failed to save image:', error);
        throw new Error('Failed to save image');
    }

    // Update meal image path for database
    meal.image = `/images/${fileName}`;

    // Save meal to the database
    try {
        db.prepare(`
            INSERT INTO meals
                (title, summary, instructions, creator, creator_email, image, slug)
            VALUES 
                (@title, @summary, @instructions, @creator, @creator_email, @image, @slug)`
        ).run(meal);
        console.log('Meal saved successfully in the database.');
    } catch (error) {
        console.error('Failed to save meal in the database:', error);
        throw new Error('Database operation failed');
    }
}