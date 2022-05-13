import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import SliderNavigation from '../../components/sliderNavigation/SliderNavigation'
import OftenOrdered from '../../components/oftenOrdered/OftenOrdered'
import css from '../main/main.module.css'
import PizzaCard from '../../components/pizzaCards/PizzaCard'
import UnderHeader from '../../components/underHeader/UnderHeader'


export default function Main(props) {

  return (
    <div>
        <div className="container">
        <Header />
        <div className={css.underHeader}>
        <UnderHeader cart={props.cart} deleteCart={props.deleteCart} id={props.cart.id} total={props.total}/>
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
            handleClick={props.handleClick}
            {...item}
            />)
        }
        </div>
       
        </div>
    </div>
  )
}
