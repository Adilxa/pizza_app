import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import EnterToSite from '../enterToSite/EnterToSite'
import '../modal/modal.css'
import ModalCards from '../modalcards/ModalCards'

export default function Modal({ deleteCart, setCart, id, total, ...props }) {

  const [enterModal, setEnterModal] = useState(false)


  console.log(props.cart);
  return (
    <>
      <div className={props.active ? 'modal active' : 'modal'} onClick={() => props.setActive(false)}>
        <div className={props.active ? 'modal__content active' : 'modal'} onClick={e => e.stopPropagation()}>

          {
            props.cart.length ?
              <div className="total">
                <h3> {props.cart.length} товар на {props.cart.reduce((sum, total) => sum + Math.floor(total.price), 0)}сомов</h3></div>
              : ''
          }

          {
            props.cart.length
              ?
              <div className='list'>
                {props.cart.map((item) =>
                  <ModalCards
                    deleteCart={deleteCart}
                    name={item.name}
                    id={item.id}
                    key={item.id}
                    description={item.description}
                    image={item.image}
                    price={item.price} />
                )}
              </div>
              : <div className="content">
                <img src="https://dodopizza-a.akamaihd.net/site-static/dist/121df529925b0f43cc73.svg" alt="" />
                <div className="description">
                  <p>
                    <br />
                    Lorem ipsum dolor sit t<br />
                    Lorem ipsum dolor sit ame ;lt<br />
                  </p>

                </div>
                <div className='btn'>
                  <Link to='/'>Back To Menu</Link>
                </div>
              </div>
          }
          {
            props.cart.length ?
              <div className="footer">
                <input type="text" className='promocode' placeholder='Промокод' />
                <div className="info">
                  <p>{props.cart.length}товар</p>
                  <p>{props.cart.reduce((sum, total) => sum + Math.floor(total.price), 0)}сом</p>
                </div>
                <div className="info">
                  <p>Начислим Додокоины </p>
                  <p>+100</p>
                </div>
                <hr />
                <div className="info">
                  <div>{props.cart.length} товар</div>
                  <div>{props.cart.reduce((sum, total) => sum + Math.floor(total.price), 0)}с</div>
                </div>

                <button onClick={() => setEnterModal(true)} className='btn_sec'>К оформлению заказов</button>

              </div>
              : ''
          }
        </div>

      </div>
      <EnterToSite enterModal={enterModal} setEnterModal={setEnterModal} />
    </>
  )
}
