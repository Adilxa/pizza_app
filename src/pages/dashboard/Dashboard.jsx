import React, { useEffect } from 'react'
import Header from '../../components/header/Header'
import PizzaCard from '../../components/pizzaCards/PizzaCard'
import css from '../dashboard/Dashboard.module.css'
import { Link } from 'react-router-dom'
export default function Dashboard(props) {

    const logout = () =>{
        props.setAuth(null)
    }

    return (
        <div>
            <div className="container">
                <Header />
                <div className={css.cart}>
                    <div className={css.add}>
                        <Link to='/createPizza'>
                            <img src="https://cdn-icons-png.flaticon.com/128/4677/4677490.png" alt="" />
                        </Link>
                    </div>
                    {
                        props.pizzas.map((item) => <PizzaCard
                            key={item.id}
                            isAdmin={true}
                            {...item}
                        />)
                    }
                    <button className={css.btnC} onClick={()=>logout()}>Clear</button>
                </div>
            </div>
        </div>
    )
}
