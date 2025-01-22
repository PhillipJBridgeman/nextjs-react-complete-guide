'use server';
import { saveMeal } from './meals';
import { redirect } from 'next/navigation';

function isInvaildtext(text) {
    return !text || text.trim() === '';
}

export async function shareMeal(prevState, formData) {
    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email')
    }

    if (
        isInvaildtext(meal.title) ||
        isInvaildtext(meal.summary) ||
        isInvaildtext(meal.instructions) ||
        isInvaildtext(meal.creator) ||
        isInvaildtext(meal.creator_email) ||
        !meal.creator_email.includes('@') ||
        !meal.image || meal.image.size === 0
    )
    {
        return {
            message: 'Invalid input.'
        };
    }
    
    await saveMeal(meal);
    revalidatePath('/meals', 'layout');
    redirect('/meals');
}