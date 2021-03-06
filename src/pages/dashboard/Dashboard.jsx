import React, { useEffect } from 'react'
import Header from '../../components/header/Header'
import PizzaCard from '../../components/pizzaCards/PizzaCard'
import css from '../dashboard/Dashboard.module.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
export default function Dashboard(props) {


    const pizzas = useSelector((state)=>state.pizzas.data)
   
    return (
        <div>
            <div className="container">
                <Header outBtn={true} />
                <div className={css.cart}>
                    <div className={css.add}>
                        <Link to='/createPizza'>
                            <img src="https://cdn-icons-png.flaticon.com/128/4677/4677490.png" alt="" />
                        </Link>
                    </div>
                    {
                        pizzas.map((item) => <PizzaCard
                            key={item.id}
                            isAdmin={true}
                            {...item}
                        />)
                    }

                    
                </div>
            </div>
        </div>
    )
}
