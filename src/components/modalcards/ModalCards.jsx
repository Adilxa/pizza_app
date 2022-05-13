import React from 'react'
import css from '../modalcards/modalCards.module.css'
export default function ModalCards({name,price,image,description,deleteCart,id}) {
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
                <p>{description}</p>
            </div>
            </div>
            
            <div className={css.price}>
            <h1>{price}</h1>
            
            </div>
        </div>
    </div>
    <div className={css.btn}>
          <button style={{color:'white'}} onClick={()=>deleteCart(id)}>Remove</button>
        </div>
    </>
  )
}
