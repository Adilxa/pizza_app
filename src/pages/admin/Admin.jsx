import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import css from '../admin/Admin.module.css'
import Dashboard from '../dashboard/Dashboard'
export default function Admin() {

    const [login ,setLogin] = useState('')
    const [password,setPassword] = useState('')

    const submit = (e) =>{
        e.preventDefault()
    }

    const handleEmail = (e) =>{
        setLogin(e.target.value)
        alert(login)
    }
    const handlePassword = (e) =>{
        setPassword(e.target.value)
        alert(password)
    }

  return (
      <div className="container">
    <form 
    onSubmit={submit}
    action="">
<div className={css.wrapper}>
  
  <h1 style={{textAlign:'center'}}>Sign in</h1>

  <div className={css.login}>
      <h4>Login</h4>
  <input 
  type="text" 
  placeholder='HelloWorld0gmail.com'
  onChange={handleEmail}
  value={login}
  className={css.inputs}
  />
  </div>
  <div className={css.login}>
      <h4>Password</h4>
  <input 
  type="password"
  onChange={handlePassword}
  value={password}
  className={css.inputs}
   />

  <div className={css.btn}>    
      <button type='submit'>Войти</button>
  
  </div>
  </div>
</div>
</form>
</div>
  )
}
