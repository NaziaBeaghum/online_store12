import React from 'react'
import { CartuseContext } from './Stateprovider'
import Checkout from './Checkout'
import './CHeckoutItem.css'

function CheckoutItem({image,title,price,rating,id})
 {
   const[{basket},dispatch]=CartuseContext()

   function removefrombasket(id)
   {
     dispatch({
        type:"REMOVE_FROM_BASKET",
        id:id
     })
     console.log(id)
   }
   
    
   
  return (
    <div className='checkout_page'>
    <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image}/>

            <div className='checkoutProduct__info'>
                
                <p className="checkoutProduct__price">
                    <small>Rs</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    
                            {Array(rating)
                        .fill()
                        .map((_, i) => (
                        <p>🌟</p>
                        ))}
                    
                </div>
                
                   <button onClick={()=>removefrombasket(id)}>Remove from Basket</button>
                
            </div>
        </div>
        </div>
    )
}



export default CheckoutItem

