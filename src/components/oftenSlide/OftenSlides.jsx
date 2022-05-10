import React from 'react'
import css from '../oftenSlide/oftenSlides.module.css'
export default function OftenSlides(props) {
  return (
    <div className={css.often}>
        <div className="image">
            <img style={{width:'60px',height:'60px'}} src={props.image} alt="" />
        </div>
        <div className={css.description}>
            <p>{props.up}</p>
            <p>{props.bottom}</p>
        </div>
    </div>
  )
}
