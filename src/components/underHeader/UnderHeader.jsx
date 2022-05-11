import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import css from '../underHeader/underHeader.module.css'
import Modal from '../modal/Modal'
export default function UnderHeader({cart,deleteCart,id}) {
  const [modal, setModal] = useState(false) 
  return (
    <div className={css.nav}>

      <div  className={css.link}>
        <Link to='/'>Пицца</Link>
        <Link to='/'>Комбо</Link>
        <Link to='/'>Закуски</Link>
        <Link to='/'>Десерты</Link>
        <Link to='/'>Напитки</Link>
        <Link to='/'>Другие товары</Link>
        <Link to='/'>Акции</Link>
        <Link to='/'>Контакты</Link>
        <Link to='/'>О нас</Link>
        <Link to='/'>Прямой эфир</Link>
      </div>

      <button onClick={() => setModal(!modal)}>
        корзина | {cart.length} 
      </button> 
   
        <Modal cart={cart} active={modal} id={id} deleteCart={deleteCart} setActive={setModal} >
        </Modal>
        
  
        
    </div>


  )
}
