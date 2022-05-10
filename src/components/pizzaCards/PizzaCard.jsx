import React from 'react'
import css from '../pizzaCards/pizzaCards.module.css'
export default function PizzaCard({handleClick,image,name,description,price,item,...props}) {

  return (
    <div className={css.cards}>
        <img src={image} alt="" />
        <h2>{name}</h2>
        <p>{description}</p>
        <div className={css.btn}>
            <p>от {price}сом</p> 
            <button onClick={()=>handleClick(item)}>Add to Order</button>
        </div>
    </div>
  )
}
