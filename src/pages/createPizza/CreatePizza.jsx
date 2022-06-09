import React from 'react'
import css from '../createPizza/CreatePizza.module.css'
import { useState } from 'react'
import Api from '../../api/Api'
import { useNavigate } from 'react-router-dom'
export default function CreatePizza({addNewPizza}) {
  
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [image,setimage] = useState([])

  const submit = (e) =>{
    e.preventDefault()
    const data  = {
      name:name,
      description:description,
      price:price,
      image:'https://cdn-icons-png.flaticon.com/128/834/834096.png'
    }


    Api.createPizza(data)
    .then((res)=>{
      console.log(res);
      addNewPizza(res.data)
      navigate('/dashboard')
    })
  }
      // useEffect(() => {
      //     api.post("pizzaApp", {
      //         name: name,
      //         description: description,
      //         price: price
      //     })
      //     .then(function (response) {
      //         console.log(response);
      //       })
      //   }, []);
  const navigate = useNavigate()

  const handlePrice =(e) =>{
      setPrice(e.target.value)
  }
  
  const handleDescription = (e) =>{
      setDescription(e.target.value)
  }

  const handleName = (e) =>{
      setName(e.target.value)
  }
  const handleImage = (e) =>{
    setimage(e.target.value)
  }
  return (
    <div className='container'>
        <div className={css.title}> <h1> Создай свою Пиццу</h1></div>
        <form onSubmit={submit} className={css.inputs}>
            
            <input className={css.name} onChange={handleName} value={name} type="text" placeholder='Название'/>

            <input className={css.description} onChange={handleDescription} type="text"  placeholder='Описание'/>

            <input className={css.price} onChange={handlePrice} type="number" placeholder='Цена' />

             <label className={css.download}>   
            <input onChange={handleImage} className={css.hideinput} type="file" />
                <h3>Выбрать картинку</h3>
                <img src="https://cdn-icons-png.flaticon.com/128/7048/7048359.png" alt="" />
            </label> 
            <div className={css.create}>  
            <button onClick={()=>navigate()}><h3>Создать</h3></button></div>
        </form>
    </div>
  )
}
