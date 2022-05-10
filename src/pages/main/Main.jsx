import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import SliderNavigation from '../../components/sliderNavigation/SliderNavigation'
import OftenOrdered from '../../components/oftenOrdered/OftenOrdered'
import css from '../main/main.module.css'
import PizzaCard from '../../components/pizzaCards/PizzaCard'
import Modal from '../../components/modal/Modal'
import UnderHeader from '../../components/underHeader/UnderHeader'
import ModalCards from '../../components/modalcards/ModalCards'


export default function Main(props) {
    const [cart,setCart] = useState([])
    const handleClick = (item) =>{
        setCart([...cart,item])
        console.log(cart)
    }
    const deleteCart = (id)=>{
        const remove = cart.filter((item)=>item.id !== cart.id)
        setCart(remove)
        console.log(remove)
      }
 
  return (
    <div>
        <div className="container">
        <Header />
        <div className={css.underHeader}>
        <UnderHeader cart={cart} deleteCart={deleteCart} id={cart.id}/>
       
        </div>
        <SliderNavigation/>
        <h2 style={{marginTop:'50px',marginBottom:'30px'}}>
            Часто Заказывают
        </h2>

        <OftenOrdered/>

        <div className={css.certificate}>
        <img style={{width:'50px',height:'50px'}} src="https://cdn-icons-png.flaticon.com/128/6978/6978161.png" alt="" />
        <div className={css.desc}>
            <h2>
            Без Свинины
            </h2>
            <p>
            Мы готовоим из цыпленка и говядины
            </p>
        </div>
        </div>

        <h1 style={{marginBottom:'50px'}}>Пиццы</h1>
        <div className={css.pizzaCards}>
        {
            props.pizzas.map((item)=><PizzaCard 
            key={item.id}
            item={item}
            handleClick={handleClick}
            {...item}
            />)
        }
        </div>
       
        </div>
    </div>
  )
}
