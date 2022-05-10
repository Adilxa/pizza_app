import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/main/Main'
import { useEffect } from 'react';
import { useState } from 'react';
import UnderHeader from './components/underHeader/UnderHeader';
import Header from './components/header/Header';
const baseUrl = 'https://625eaacd873d6798e2abb689.mockapi.io/'

function App(props) {
   const [pizzas,setPizzas] =useState([])
  useEffect(()=>{
    fetch(baseUrl+'pizzaApp')
    .then((res)=> res.json())
    .then( (data)=>{
        setPizzas(data)
       console.log(data)
    })
},[])


  return (
  <BrowserRouter>
  <div className='App'>
    <Routes>
      <Route  path='/' element={<Main pizzas={pizzas}/>}/>
    </Routes>
  </div>
  </BrowserRouter>
  
  );
}

export default App;
