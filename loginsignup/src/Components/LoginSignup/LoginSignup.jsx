//import React from 'react'
import React, {useState} from "react";
import './LoginSignup.css';

import user_icon from '../assets/person.png';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';

const LoginSignup = () => {

  // here is where we will start to add functionality to app
  // gonna need a useState react hook, allows us to sit data
  // on the variable 
  const[action, setAction] = useState("Sign up");
  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action ==="Login"?<di></di>:<div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder="Name"/>
        </div>}
        
        <div className="input">
          <img src={email_icon} alt=""/>
          <input type="email" placeholder="Email"/>
        </div>
      </div>
        <div className="input">
          <img src={password_icon} alt=""/>
          <input type="password" placeholder="Password"/>
        </div>
        {action==="Sign up"?<div></div>: <div className="forgot-password">Lost Password? <span>Click Here</span></div>}
        <div className="submit-container">
          <div className={action === "Login"?"submit gray":"submit"} onClick={() => {setAction("Sign up")}}>Sign up</div>
          <div className={action === "Sign up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
    </div>
  )
}


export default LoginSignup
