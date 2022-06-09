import React from 'react'
import { useDispatch } from 'react-redux'
import Api from '../../api/Api'
import { SET_PIZZA_BASKET } from '../../Redux/ActionTypes'
import css from '../pizzaCards/pizzaCards.module.css'
export default function PizzaCard({image,name,description,price,item,...props}) {

  const dispatch = useDispatch()

  const addToBasket = () =>{
    const data = {image,name,description,price}
    dispatch({type:SET_PIZZA_BASKET,payload:data})
  }

  const onDelete = (e)=>{
    Api.deletePizza(props.id)
    .then((e)=>{
      alert('you are deleteditem that pizza')
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
              <button onClick={addToBasket}>Add to Order</button>
            }
            
        
        </div>
    </div>
  )
}
