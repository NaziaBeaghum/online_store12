import React, { useEffect, useState } from 'react'
import './Checkout.css'
import { CartuseContext } from './Stateprovider'
import { useNavigate } from 'react-router-dom'
import { createContext } from 'react'
import Payment from './Payment'

 export const NewContext=createContext()

function Subtotal() 
{
  const [{basket},dispatch]=CartuseContext()

   const[total,setTotal]=useState(0)
   const navigate=useNavigate()
 


 
                useEffect(()=>{
                  setTotal(basket.reduce((prevalue,currvalue)=> 
                  prevalue+Number(currvalue.price),0))
                },[basket])
                  console.log(total)
  return (
    
    
    <div className='subtotal'>



     
       <>
           <h3>
           
            Subtotal({basket.length}items): <strong>{total}</strong>
           </h3>   
           
       </>   
           

      <br></br>
           <button className="proceed_button"   onClick={e=>navigate('/Payment')}>Proceed to Checkout</button>
           

    </div>

  )
}

export default Subtotal