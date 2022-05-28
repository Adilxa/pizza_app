import React from 'react'
import Api from '../../api/Api'
import css from '../pizzaCards/pizzaCards.module.css'
export default function PizzaCard({handleClick,image,name,description,price,item,...props}) {

  const onDelete = (e)=>{
    Api.deletePizza(props.id)
    .then((e)=>{
      alert('you are deleted that pizza')
      e.preventDefault()
    })
  }
  return (

    <div className={css.cards}>
        <img src={image} alt="" />
        <h2>{name}</h2>
        <p>{description}</p>
        <div className={css.btn}>
            <p>от {price}сом</p> 

            {
              props.isAdmin ?
              <div className={css.btns}>
                <button>Change</button>
                <button onClick={()=>onDelete()}>Delete</button>
              </div>: 
              <button onClick={()=>handleClick(item)}>Add to Order</button>
            }
            
        
        </div>
    </div>
  )
}
