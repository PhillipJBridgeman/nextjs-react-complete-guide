import classes from './meals-grid.module.css';
import MealItem from './meal-item';

export default function MealsGrid({ meals }) {
    console.log("Meals data:", meals); // Debugging line

    if (!meals || !Array.isArray(meals)) {
        console.error("Error: meals is not an array", meals);
        return <p>No meals available.</p>; // Graceful fallback
    }

    return (
        <ul className={classes.meals}>
            {meals.map(meal => (
                <li key={meal.id}>
                    <MealItem {...meal} />
                </li>
            ))}
        </ul>
    );
}
