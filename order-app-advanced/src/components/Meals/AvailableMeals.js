import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { useEffect, useState } from 'react';


const AvailableMeals = () => {

  const [meals, setMeals] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [DBError, setDBError] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    const fetchMeals = async () => {
      const response = await fetch('https://reactrefres-default-rtdb.europe-west1.firebasedatabase.app/meals.json') 
      
      if(!response.ok) {
        throw new Error('Something went wrong !!!')
      }
      
      const data = await response.json()
      const loadedMeals = []

      for(const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          price: data[key].price,
          description: data[key].description
        })
      }

      setMeals(loadedMeals)
      setIsLoading(false)
    }

    fetchMeals().catch(err => {
      setIsLoading(false)
      setDBError(err.message)
    })
    
  }, [])

  

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

 

  if(isLoading) {
    return(
        <section className={classes.MealsLoading}>
          <h1>Loading..</h1>
        </section> 
    ) 
  }

  if(DBError) {
    return(
        <section className={classes.MealsError}>
          <h1>{DBError}</h1>
        </section> 
    ) 
  }

  return (
    <section className={classes.meals}>
       
        <Card>
           <ul>{mealsList}</ul>
        </Card>
    </section>
  );
};

export default AvailableMeals;
