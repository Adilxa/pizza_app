import React from 'react'
import '../modal/modal.css'
import ModalCards from '../modalcards/ModalCards'
export default function Modal({cart,deleteCart,setCart,id,...props}) {



  return (
    <div className={props.active ? 'modal active' : 'modal'} onClick={()=>props.setActive(false)}>
        <div className={props.active ? 'modal__content active' : 'modal'} onClick={e=>e.stopPropagation()}>


          
          <div className="content">
        <img src="https://cdn-icons-png.flaticon.com/128/472/472096.png" alt="" />
        <h1>
        
        </h1>
        <div className="description">
            <p>
                <br/>
                Lorem ipsum dolor sit t<br/>
                Lorem ipsum dolor sit ame ;lt<br/>
            </p>

        </div>
      
        </div>
        {
            cart.map((item,idx)=><ModalCards
            deleteCart={deleteCart} 
            name={item.name} 
            id={id} 
            key={idx}
            description={item.description} 
            image={item.image} 
            price={item.price}/>)
          }
        </div>
    </div>
  )
}
