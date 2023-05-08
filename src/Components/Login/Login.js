import React, { useState } from 'react'
import './Login.css'
import { Link ,useNavigate} from 'react-router-dom'
import { auth } from './firebase';




const Login = () => {
      

      const navigate=useNavigate()
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');

  const signIn=(event)=>{
                         event.preventDefault()
                         auth
                          .signInWithEmailAndPassword(email,password)
                          .then((auth)=>{
                          if(auth)
                          {
                              navigate('/')
                          }
                        })
                          .catch(error=>alert(error.meassage))
                       }
 
 const register=(event)=>{
                event.preventDefault();
                auth
                .createUserWithEmailAndPassword(email,password)//create user with eamail and password
                .then((auth)=>{
                  //it successfully created a new user with email and password
                if(auth)
                {
                  navigate('/')
                }
    })

    .catch(error => alert (error.message))
 }
 
  
  return (
    <div className='login'>
       
          <Link to="/">
            <img  className="login_logo"  src='logo.png' alt=""/>
          </Link>

        <div className='login_container'>
            <h1>Sign-in</h1>
              <form>
                
                <h5>E-mail</h5>
                <input type='text'
                onChange={e=>setEmail(e.target.value)}
                value={email}
                />


                <h5>Password</h5>
                <input type='password'
                 onChange={e=>setPassword(e.target.value)}
                value={password}
               />
                <br></br>

                <button className='Sign_In_Buttonbutton'  type="submit" onClick={signIn}>Sign in</button>

                                <p>Create your new account by entering your email id and password</p>

                <button onClick={register} className='Create_Account_button'>Create your Account</button>
            </form>
        </div>
       
    </div>
  )
}

export default Login