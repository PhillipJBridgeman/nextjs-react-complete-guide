import { Suspense } from 'react';
import Link from 'next/link';
import classes from './page.module.css';
import MealsGrid from '@/components/meals/meals-grid';
import { GetAllMeals } from '@/lib/meals';

export const meteDate = {
    title: "All Meals",
    description: "Browse the declicious meals shared by our community!"
}

async function Meals() {
    const meals = await GetAllMeals();
    return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
    return (
        <>
            <header className={classes.header}>
                <h1>
                    Delicious meals, create{' '}
                    <span className={classes.highlight}>by you</span>
                </h1>
                <p>
                    Choose your favourite recipe and cook it yourself. It is easy and fun!
                </p>
                <p className={classes.cta}>
                    <Link href="/meals/share">
                        Share your favourite recipe!
                    </Link>
                </p>
            </header>
            <main className={classes.main}>
                <Suspense
                    fallback={
                        <p className={classes.loading}>
                            Fetching Meals...
                        </p>
                    }
                >
                    <Meals />
                </Suspense>
            </main>
        </>
    );
}