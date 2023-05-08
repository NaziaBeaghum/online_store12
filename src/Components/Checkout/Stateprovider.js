import React, { useReducer } from 'react'
import { createContext ,useContext} from 'react'
import { cartreducer ,initialState} from './reducer'

export const Context=createContext()

function Stateprovider({cartreducer,initialState,children}) {

    

  return (
    <Context.Provider value={useReducer(cartreducer,initialState)} >
        {children}
    </Context.Provider>
  )
}

export default Stateprovider


export const CartuseContext=()=>
{
    return useContext(Context)
}