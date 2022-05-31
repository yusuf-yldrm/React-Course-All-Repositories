import React from 'react'
import s from "./MealItem.module.css"
import MealItemForm from './MealItemForm'

const Meal = (props) => {

  const price = '$' + props.price.toFixed(2)

  return (
    <li id={props.id} className={s.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={s.description}>{props.description}</div>
        <div className={s.price}>{price}</div>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  )
}

export default Meal