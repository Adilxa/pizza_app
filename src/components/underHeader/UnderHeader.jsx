import React from 'react'
import { Link } from 'react-router-dom'
import css from '../underHeader/underHeader.module.css'
export default function UnderHeader() {
  return (
    <div className={css.nav}>
        <div className={css.link}>
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
        <div className={css.btn}>
            <Link to='/'>Корзина</Link>
        </div>
    </div>
  )
}
