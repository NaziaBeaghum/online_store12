
import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Checkout from './Components/Checkout/Checkout';
import Login from './Components/Login/Login';

import { useState } from 'react';
import { useEffect } from 'react';
import { auth } from './Components/Login/firebase';
import { CartuseContext } from './Components/Checkout/Stateprovider';
import Payment from './Components/Checkout/Payment';
import FinalContext from './Components/Checkout/FinalContext';
import ConfirmOrder from './Components/Checkout/ConfirmOrder';

function App() {

  const [{basket},dispatch]=CartuseContext()

  useEffect(()=>{
    //will only run once when the app component loads..dependency is there then it 
    //will load accordingly if ther is any change in it

    auth.onAuthStateChanged(authUser=>{
      console.log("the user is",authUser)
      if (authUser)
      { 
        //dispatch an object of type and user
          dispatch({
            type:'SET_USER',
            user:authUser
          })
      }
      else{
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
  },[])
   
      return (
       <div className="App">
      <BrowserRouter>
        
      <Header/>
      
      
      <Routes>
         <Route path='/' element ={<Home/>}/>
         <Route path='Checkout' element ={<Checkout/>}/>
         <Route path='/Login' element ={<Login/>}/>
         <Route path='/Payment' element ={<Payment/>}/>
         <Route path='/ConfirmOrder' element ={<ConfirmOrder/>}/>
      </Routes>
      

      </BrowserRouter>
      
    </div>
  );
}

export default App;
