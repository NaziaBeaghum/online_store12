import React, { useEffect } from 'react'

import { CartuseContext } from '../Checkout/Stateprovider'
import { Cartreducer } from '../Checkout/reducer'
import './Product.css'




function Product({id,title,price,rating,image})
 {

 const [{basket},dispatch]=CartuseContext()
  console.log(basket)
 /*const addtoCart=()=>{
  
        dispatch(
          {
            type:"ADD_TO_BASKET",
            item:{
              id:{id},
              title:{title},
              price:{price},
              rating:{rating},
              image:{image}
            }
          }
        )
        console.log(state)
   
  }*/
 

  return (
    <div className='product'>
        <div className='product_info'>
           <p>{title} </p>

           <p className='product_price'>
                <small>$</small>
                <strong>{price}</strong>
           </p>

              <div className='product_rating'>
                {Array(rating).fill().map((_,i)=>
                
                <p>🌟</p>
          
                )}
              </div>
        </div>

            <img src={image} alt=""/>

            <button  onClick={()=>dispatch({ type:"ADD_TO_BASKET",
            item:{
              id,title,image,rating,price
            }
           
            })} className='product_button'>Add to basket</button>


        

    </div>
  )
}
 
 export default Product
