import React, { Children } from 'react'
    import { CartuseContext } from './Stateprovider'
    import { useState,createContext,useContext ,useEffect} from 'react'
    export const Context=createContext()

      function FinalContext() {

        const [{basket},dispatch]=CartuseContext()
        const[total,setTotal]=useState(0)
    
        useEffect(()=>{
            setTotal(basket.reduce((prevalue,currvalue)=> 
            prevalue+Number(currvalue.price),0))
           },[basket])
             console.log(total)
    
    
      return (
        <Context.Provider value={"hi"}>
           
        </Context.Provider>
      )
    }
    
    export default FinalContext
    export const FinaluseContext=()=>
        {
            return useContext(Context)
        }