import React from 'react'
import css from '../slide/slide.module.css'
export default function Slide(props) {
  return (
    <div className={css.slide} style={{backgroundImage:`url(${props.image})`}}>
        <h2>{props.description}</h2>
    </div>
  )
}
