import React from 'react'
import css from '../createPizza/CreatePizza.module.css'
export default function CreatePizza() {
  return (
    <div className='container'>
        <div className={css.title}> <h1> Создай свою Пиццу</h1></div>
        <div className={css.inputs}>

            
            <input className={css.name} type="text" placeholder='Название'/>

            <input className={css.description} type="text"  placeholder='Описание'/>

            <input className={css.price} type="number" placeholder='Цена' />

             <label className={css.download}>   
            <input className={css.hideinput} type="file" />
                <h2>Выбрать картинку</h2>
            </label> 
            <div className={css.create}><h3>Создать+</h3></div>
        </div>

        
    </div>
  )
}
