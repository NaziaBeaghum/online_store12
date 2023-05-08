import React, { useState } from 'react'
import Subtotal from './Subtotal'
import './Checkout.css'
import { CartuseContext } from './Stateprovider'
import  '../Home/Product.css'
import CheckoutItem from './CheckoutItem'
import FlipMove from 'react-flip-move';


function Checkout() 
{
  const [{basket,user},dispatch]=CartuseContext()

   
  console.log(basket)
    
  
  return (
    
    <div className='checkout'>

         <img  style={{height:"60px",width:"100vw"}} src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"  alt=""/>
         <div className='checkout_container'>
           <div className='checkout_left'>
            <h3>hello,{user?.email}</h3>
            <h2 className='checkout_title' >Your shopping Basket:</h2> 
            
            {basket.length>0?
            (<>
            <FlipMove>
              {basket.map((prod)=>(
              <CheckoutItem
              key={prod.id}
              image={prod.image}
              title={prod.title}
              price={prod.price}
              rating={prod.rating}
              id={prod.id}
              />
              ))}
              </FlipMove>
            </>

            ):


             



            (
                <div className='no_items'>no items found:</div>
            )}
            
          </div>
        
          
            

             <div className='checkout_right'>
              <Subtotal/>
            </div>

           </div>
    
  </div>
)
}

export default Checkout
  