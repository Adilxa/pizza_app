import React, { useState } from 'react'
import css from '../admin/Admin.module.css'
import Api from '../../api/Api'
import { useDispatch } from 'react-redux'
import { SET_AUTH } from '../../Redux/ActionTypes'
export default function Admin() {
 
    const dispatch = useDispatch()
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const submit = (e) => {
        e.preventDefault()
        dispatch({ type: SET_AUTH, payload: {token:' lorem10000'} })

        Api.auth({
            login,
            password
        })
            .then((res) => {
                if (res.data.token) {
                    // setAuth(res.data)
                    dispatch({ type: SET_AUTH, payload: {token: res.data} })
                } else {
                    alert('someting went wrong please try later')
                }
            })
    }

    const handleEmail = (e) => {
        setLogin(e.target.value)

    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div className="container">
            <form
                onSubmit={submit}
                action="">
                <div className={css.wrapper}>

                    <h1 style={{ textAlign: 'center' }}>Sign in</h1>

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
