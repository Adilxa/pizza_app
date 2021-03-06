import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Main from './pages/main/Main'
import { useEffect } from 'react';
import { useState } from 'react';
import Admin from '../src/pages/admin/Admin'
import Dashboard from './pages/dashboard/Dashboard';
import Api from './api/Api'
import CreatePizza from './pages/createPizza/CreatePizza';
import { useDispatch } from 'react-redux';
import { SET_ALL_PIZZA } from './Redux/ActionTypes';
import {PrivateRoute ,PublicRoute } from './Routes'

function App() {

  const dispatch = useDispatch()


  const addNewPizza = (newPizza) => {
    // setPizzas([...pizzas, newPizza]) redux logic rewrite
  }

  useEffect(() => {
    Api.getAllPizzaMock()
      .then((res) => {
        // setPizzas(res.data.data.data)
        dispatch({ type:SET_ALL_PIZZA,payload:res.data })
      })
    // fetch(baseUrl+'pizzaApp')
    // .then((res)=> res.json())
    // .then( (data)=>{
    //     setPizzas(data)
    //    console.log(data)
    // })
  }, [])

  return (
    <BrowserRouter>

      <div className='App'>
        <Routes>
          <Route path='/' element={<Main/>} />

          <Route path='/admin' element={<PublicRoute Component={ Admin } /> } />

          <Route path='/dashboard' element={<PrivateRoute Component={Dashboard}/> } />

          <Route path='/createPizza' element={<PrivateRoute Component={() => <CreatePizza addNewPizza={addNewPizza} />}  />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
