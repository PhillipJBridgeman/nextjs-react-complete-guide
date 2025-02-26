'use server';

import { saveMeal } from '@/lib/meals';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export default async function sharedMeal(prevState, formData) {
    function isValidText(text) {
        return text && text.trim() !== '';
    }

    const meal = {
        creator: formData.get('name'),
        email: formData.get('email'),
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
    };

    if (
        !isValidText(meal.title) ||
        !isValidText(meal.summary) ||
        !isValidText(meal.instructions) ||
        !meal.email.includes('@') ||
        !meal.image ||
        meal.image.size === 0 
    ) {
        return {
            message: 'Invalid Input',
        }
    }

    await saveMeal(meal);
    revalidatePath('/meals', 'layout');
    redirect('/meals');
}