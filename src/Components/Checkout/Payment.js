import React from 'react'
import { CartuseContext } from './Stateprovider'
import './Payment.css'
import { useState,useEffect } from 'react'

import CheckoutItem from './CheckoutItem'
import { useNavigate } from 'react-router-dom'
import ConfirmOrder from './ConfirmOrder'

 

const Payment = () => {
  
    const[{basket},dispatch]=CartuseContext()
    const[total,setTotal]=useState(0)
    const navigate= useNavigate()
    
    useEffect(()=>{
        setTotal(basket.reduce((prevalue,currvalue)=> 
        prevalue+Number(currvalue.price),0))
       },[basket])
         console.log(total)
    
     
   return (
    <div className=''>
      <div className='checkout_list'>
         <h3>Checkout({basket.length})</h3>
      </div>

    <div className='payment'>
       
      <div className='payment_container'>
     
      
              
                <h4>Delivery address</h4>
                <p >
                <span> 567,ABC block,</span><br></br> 
                <span>ABCresidency,</span><br></br>
                <span>ABCDE</span><br></br>
                </p>
              <br></br>

             < br></br>
              
                    <h4>Review items and Delivery</h4>
                

                    {basket.length>0?
                      (   
                        <>  
                          {basket.map((prod)=>(
                            <CheckoutItem
                            key={prod.id}
                            image={prod.image}
                            title={prod.title}
                            price={prod.price}
                            rating={prod.rating}
                            id={prod.id}/>
                          ))}
                        </>
                      ):
                      (
                          <div className='No_items'>No items found</div>
                      )
                    

                      }
                
       </div>

       <div className='payment_method'>
          <h4>Only Cash on delivery</h4>
          <div className='card_details'>
            <h4>Order Total:Rs {total} </h4>
            <button style={{backgroundColor:" #f0c14b",padding:"5px" ,margin:"10px"}} onClick={e=>navigate('/ConfirmOrder')} >Confirm Order </button>
          </div>  
       </div>
    </div>
    </div>
  )
}


export default Payment
