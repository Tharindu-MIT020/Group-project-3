import React, { useState } from 'react';
import './login.css';
import Logisus from './logsuccess';
import Logincon from './logincon'


const Login = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitLogin() {
    setIsSubmitted(true);
  }


  return (
    <>
      <div className="full">
        <img className='login-img11' src='img/login.jpg' alt='spaceship' />
      <div className='login-container'>
        <div className='login-content-left'>
        <img className='login-img' src='img/login.jpg' alt='spaceship' />
        </div>
        {!isSubmitted ? (
          <Logincon submitLogin={submitLogin} />
        ) : (
          <Logisus />
        )}
        </div>
        </div>
        
    </>
  );
  };

export default Login;
