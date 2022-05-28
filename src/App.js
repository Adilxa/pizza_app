import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Main from './pages/main/Main'
import { useEffect } from 'react';
import { useState } from 'react';
import Admin from '../src/pages/admin/Admin'
import Dashboard from './pages/dashboard/Dashboard';
import Api from './api/Api'
import CreatePizza from './pages/createPizza/CreatePizza';

const PrivateRoute = ({ Component, isAuth }) => {
  return isAuth ? <Component /> : <Navigate to='/admin' />
}

const PublicRoute = ({ Component, isAuth }) => {
  return isAuth ? <Navigate to='/dashboard' /> : <Component />
}


function App(props) {
  const [pizzas, setPizzas] = useState([])
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cartPizza')) || [])
  const [total, setTotal] = useState(0)
  const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem('auth')))


  const handleClick = (item) => {
    setCart([...cart, item])
    console.log(item.id)
  }
  const addNewPizza = (newPizza) => {
    setPizzas([...pizzas, newPizza])
  }


  const deleteCart = (id) => {
    const remove = cart.filter((item) => item.id !== id)
    setCart([...remove])
    console.log(id)
  }

  useEffect(() => {
    localStorage.setItem('cartPizza', JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    Api.getAllPizza()
      .then((res) => {
        setPizzas(res.data.data.data)
      })
    // fetch(baseUrl+'pizzaApp')
    // .then((res)=> res.json())
    // .then( (data)=>{
    //     setPizzas(data)
    //    console.log(data)
    // })
  }, [])
  useEffect(()=>{
      localStorage.setItem("auth",JSON.stringify(isAuth))
  },[isAuth])
  




  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Main pizzas={pizzas} cart={cart} handleClick={handleClick} deleteCart={deleteCart} total={total} />} />

          <Route path='/admin' element={<PublicRoute Component={() => <Admin setAuth={setIsAuth} />} isAuth={isAuth} />} />

          <Route path='/dashboard' element={<PrivateRoute Component={() => <Dashboard pizzas={pizzas} />} isAuth={isAuth} />} />

          {/* <Route path= '/dashboard' element={<Dashboard pizzas={pizzas}/> }/> */}
          <Route path='/createPizza' element={<PrivateRoute Component={() => <CreatePizza addNewPizza={addNewPizza} />} isAuth={isAuth} />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
