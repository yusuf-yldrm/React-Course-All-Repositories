import DUMMY_MEALS from "../../dummy-data"
import s from "./AvailableMeals.module.css"
import MealItem from "./MealItem/MealItem"
import Container from "../UI/Container"

const AvailableMeals = () => {

    const mealsList = DUMMY_MEALS.map(meal => (<MealItem key={meal.id} id={meal.id} name={meal.name} price={meal.price} description={meal.description} />))

    return (
        <section className={s.meals}>
            <Container>
                <ul>
                    {mealsList}
                </ul>
            </Container>
        </section>
    )
}

export default AvailableMeals