import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/main/Main'
import { useEffect } from 'react';
import { useState } from 'react';
const baseUrl = 'https://625eaacd873d6798e2abb689.mockapi.io/'

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
      <Route  path='/' element={<Main pizzas={pizzas} cart={cart} handleClick={handleClick} deleteCart={deleteCart} total={total}/>}/>
    </Routes>
  </div>
  </BrowserRouter>
  
  );
}

export default App;
