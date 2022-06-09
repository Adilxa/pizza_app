import React from 'react'
import '../enterToSite/EnterToSite.css'
export default function SecondEnterModal(props) {
  return (
    <div className={props.secEntermodal ? 'Modal Active' : 'Modal'} onClick={() => props.setSecEnterModal(false)}>
    <div className={props.secEntermodal ? 'Modal__Content Active' : 'Modal'} onClick={e => e.stopPropagation()}>
        <div className="cont">

        <h2>Вход на сайт</h2>
        <p>Код отправки сообщением на </p>

        <h3>Номер Телефона</h3>
        
        <div className="password">
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        </div>
        <div className="cont_btn">
        <button> <h3>Получить Новый код</h3></button>
        </div>

        </div>
    </div>
    </div>
  )
}
