import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Main from './pages/main/Main'
import { useEffect } from 'react';
import { useState } from 'react';
import Admin from '../src/pages/admin/Admin'
import Dashboard from './pages/dashboard/Dashboard';
import { api } from './api/Api'
import CreatePizza from './pages/createPizza/CreatePizza';


function App(props) {
   const [pizzas,setPizzas] =useState([])
   const [cart,setCart] = useState(JSON.parse (localStorage.getItem('cartPizza')) || [])
   const [total ,setTotal] = useState(0)

   const handleClick = (item) =>{
    setCart([...cart,item])
    console.log(item.id)
    if(item.id == item.id){
      return 5
    }
   
}


const deleteCart = (id)=>{
    const remove = cart.filter((item)=>item.id !== id)
    setCart([...remove])
    console.log(id)
  }

  useEffect(()=>{
    localStorage.setItem('cartPizza',JSON.stringify(cart))
  },[cart])

  useEffect(()=>{
    api.get("pizzaApp")
     .then((res)=>{
      setPizzas(res.data)
     })

    // fetch(baseUrl+'pizzaApp')
    // .then((res)=> res.json())
    // .then( (data)=>{
    //     setPizzas(data)
    //    console.log(data)
    // })
},[])


  return (
  <BrowserRouter>
  <div className='App'>
    <Routes>
      <Route  path='/' element={<Main pizzas={pizzas} cart={cart} handleClick={handleClick} deleteCart={deleteCart} total={total}/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path= '/dashboard' element={<Dashboard pizzas={pizzas}/> }/>
      <Route path='/createPizza' element={<CreatePizza/>}/>
    </Routes>
  </div>
  </BrowserRouter>
  
  );
}

export default App;
