import React from 'react'
import {Link, useNavigate} from 'react-router-dom' 
import css from '../header/header.module.css'
import UnderHeader from '../underHeader/UnderHeader'
import { SET_LOGOUT } from '../../Redux/ActionTypes'
import { useDispatch } from 'react-redux'
export default function Header(props) {
    const navig = useNavigate()
    const enter = ()=>{
        navig('/admin')
    }
    const  dispatch = useDispatch()
    const logout = () =>{
        dispatch({ type: SET_LOGOUT })
    }
  
    return (
        <>
        <header className={css.header}>
            <div className={css.left}>
                <div className={css.image}>
                <img style={{width:'50px'}} src="https://cdn-icons-png.flaticon.com/128/1404/1404945.png" alt="" />
                </div>
                <h1 className={css.leftH1}>DODO PIZZA</h1>
            </div>
            <div className={css.mid}>
                <div className={css.mid_left}>
                <div className={css.mid_up}>
                <h3>
                    Доставка пиццы Бишкек
                </h3>
                </div>
                <div className={css.bottom}>
                    <h4>
                        33 мин 4.73⭐ 
                    </h4>
                </div>
                </div>
                <div className={css.mid_right}>
                <div className={css.mid_up}>
                <h3>
                    0(551)550-550
                </h3>
                </div>
                <div className={css.bottom_r}>
                    <h4>
                        звонок по телефону
                    </h4>
                </div>
                </div>
            </div>
            <div className={css.right}>
                
                <div className={css.coin}>
                    <Link to='/'>
                    <img style={{width:'30px'}} src="https://cdn-icons-png.flaticon.com/128/134/134538.png" alt="" />
                    <p>
                        Додокоины
                    </p>
                    </Link>
                </div>

                {
                    props.outBtn? <button className={css.btnC} 
                    onClick={()=>logout()}>Выйти</button>
                    :
                   
                    <button onClick={()=>enter()}>Войти</button>
                }
                 
                
            </div>
            
        </header>
        
        
        </>
    )
}
