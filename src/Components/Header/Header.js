import React from 'react'
import './Header.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { Link} from 'react-router-dom';
import Checkout from '../Checkout/Checkout';
import { CartuseContext } from '../Checkout/Stateprovider';
import Login from '../Login/Login';
import { auth } from '../Login/firebase';

function Header() {
   const [{basket,user},dispatch]=CartuseContext()

   const handleAuthentication=()=>{
      if(user){
         auth.signOut()
      }
   }

  return (
    <div className='header'>
      
         < Link to="/">
         <div className="header_logo">
            <img src="logo.png"  alt="" />
         </div>

         </Link>

              <div className='header_nav'>
                      <Link to={!user&&'/Login'}>
                    <div className='nav_select' onClick={handleAuthentication}>
                       <span className='select_firstline'>Hello {user?user.email :" Guest"}</span>
                       <span className='select_secondline'>{user?"Sign out":"sign in"}</span>
                    </div>
                    </Link>  
                  
                    <div className='option_basket'>
                     
                         
                         
                         <small className='cart_value'>{basket.length}</small>
                         <Link to="Checkout">
                         <span className='cart'><ShoppingCartIcon/></span>
                         </Link>
                         
                    </div>


              </div>
    </div>
  )
}

export default Header