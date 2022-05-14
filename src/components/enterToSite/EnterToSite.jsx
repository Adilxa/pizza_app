import React from 'react'
import '../enterToSite/EnterToSite.css'
import { useState } from 'react'
import SecondEnterModal from './SecondEnterModal'


export default function EnterToSite(props) {
    const [secEntermodal,setSecEnterModal] = useState(false)
    const [state,setState] = useState('')
    const [stateNumber,setStateNumber] = useState(+996)
    const [error,setError] = useState(false)

    const handleEmail = (e) =>{
      setState(e.target.value)
      setError(false)
    }

    const submit = (e) =>{
      e.preventDefault()
      
      if(state === '0'){
        setSecEnterModal(true)
        setError(false)
      }else{
        setError(true)
      }
    }
  return (
    <form onSubmit={submit} className={props.enterModal ? 'Modal Active' : 'Modal'} onClick={() => props.setEnterModal(false)}>
        <div className={props.enterModal ? 'Modal__Content Active' : 'Modal'} onClick={e => e.stopPropagation()}>
            <div className="cont">

            <h2>Вход на сайт</h2>
            <p>Подарим подарок на день рождения, <br /> сохраним адрес доставки и расскажем об <br /> акциях</p>

            <h3>Номер Телефона</h3>
            <input required id='EnterInput' onChange={handleEmail} type="text" value={state} placeholder='+996 00 00 00'  />

            {
                error?<div style={{color:'orange'}}><p>error</p> </div>:''
            }
            <button><h4>Выслать код</h4> </button>
            </div>
        </div>
        <SecondEnterModal secEntermodal={secEntermodal} setSecEnterModal={setSecEnterModal}/>
    </form>
  )
}
