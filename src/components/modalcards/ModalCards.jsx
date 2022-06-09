import React from 'react'
import { useDispatch } from 'react-redux'
import { DELETE_PIZZA_BASKET } from '../../Redux/ActionTypes'
import css from '../modalcards/modalCards.module.css'
export default function ModalCards({ name, price, image, description, deleteCart ,...props}) {
  
  const dispatch = useDispatch()
  const onDelete = () =>{
    dispatch({type:DELETE_PIZZA_BASKET , id:props.id})
    console.log(props.id);
  }  
  return (

    <>

      <div className={css.section}>
        <img src={image} alt={name} />
        <div className={css.desc}>

          <div className={css.wrapper}>
            <div className={css.up}>
              <p>{name}</p>
            </div>
            <div className={css.down}>
              <p title={description}>{description}</p>
            </div>
          </div>

          <div className={css.price}>
            <h1>{price}</h1>

          </div>
        </div>
      </div>
      <div className={css.btn}>
        <button style={{ color: 'white' }} onClick={onDelete}>Remove</button>
      </div>
    </>
  )
}
