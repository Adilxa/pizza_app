import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Main from './pages/main/Main'
import { useEffect } from 'react';
import { useState } from 'react';
import Admin from '../src/pages/admin/Admin'
import Dashboard from './pages/dashboard/Dashboard';
import Api from './api/Api'
import CreatePizza from './pages/createPizza/CreatePizza';
import { useSelector,useDispatch } from 'react-redux';

const PrivateRoute = ({ Component, isAuth }) => {
  return isAuth ? <Component /> : <Navigate to='/admin' />
}

const PublicRoute = ({ Component, isAuth }) => {
  return isAuth ? <Navigate to='/dashboard' /> : <Component />
}


function App() {

  const dispatch = useDispatch()

  const [_, setCart] = useState(JSON.parse(localStorage.getItem('cartPizza')) || [])
  const [total, setTotal] = useState(0)
  const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem('auth')))


  const addNewPizza = (newPizza) => {

    // setPizzas([...pizzas, newPizza]) redux logic rewrite
  }


  const deleteCart = (id) => {
    const remove = _.filter((item) => item.id !== id)
    setCart([...remove])
    console.log(id)
  }

  
  useEffect(() => {
    localStorage.setItem('cartPizza', JSON.stringify(_))
  }, [_])

  useEffect(() => {
    Api.getAllPizzaMock()
      .then((res) => {
        // setPizzas(res.data.data.data)
        dispatch({ type:"SET_ALL_PIZZA",payload:res.data })
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
          <Route path='/' element={<Main deleteCart={deleteCart} total={total} />} />

          <Route path='/admin' element={<PublicRoute Component={() => <Admin setAuth={setIsAuth} />} isAuth={isAuth} />} />

          <Route path='/dashboard' element={<PrivateRoute Component={() => <Dashboard setAuth={setIsAuth} />} isAuth={isAuth} />} />

          {/* <Route path= '/dashboard' element={<Dashboard pizzas={pizzas}/> }/> */}
          <Route path='/createPizza' element={<PrivateRoute Component={() => <CreatePizza addNewPizza={addNewPizza} />} isAuth={isAuth} />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
