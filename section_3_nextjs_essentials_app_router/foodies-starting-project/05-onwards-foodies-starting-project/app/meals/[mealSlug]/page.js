import Image from 'next/image';
import classes from './page.module.css';
import { GetMeal } from '@/lib/meals';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
    const meal = await GetMeal(params.mealSlug);

    if (!meal) {
        return {
            title: "Meal Not Found",
            description: "The requested meal does not exist.",
        };
    }

    return {
        title: meal.title,
        description: meal.summary,
    };
}

export default async function MealDetailPage({ params }) {
    const meal = await GetMeal(params.mealSlug);

    if(!meal) {
        notFound();
    }

    meal.instructions = meal.instructions.replace(/\n/g, '<br>');

    return (
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image src={meal.image} alt={meal.title} width={500} height={300} />
                </div>
                <div className={classes.headerText}>
                    <h1>{meal.title}</h1>
                    <p className={classes.creator}>
                        by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
                    </p>
                    <p className={classes.summary}>{meal.summary}</p>
                </div>
            </header>
            <main className={classes.main}>
                <p 
                className={classes.instructions} 
                dangerouslySetInnerHTML={{ __html: meal.instructions }}>

                </p>
            </main>
        </>
    );
}
