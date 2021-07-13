import React, { useState } from 'react';
import './login.css';
import useLog from './useLog'
import Validate from './validateInfo'

import { Link } from 'react-router-dom';

const Logincon = ({submitLogin}) => {
  const{handleChange,handleSubmit, values, errors} = useLog(
    submitLogin,
    Validate
  )
 return (
    <div className='form-content-right'>
       <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
            Join V Graphics 
        </h1>
                <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
            
          />
          {errors.username && <p>{errors.username}</p>}
         
        </div>
          <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
            
          />
               {errors.password && <p>{errors.password}</p>}
          
        </div>
         <button className='form-input-btn' type='submit'>
          Login
        </button>
        <div>
        <p className= 'form-haveac'>  Have not an account? Register <Link to="/register"> here</Link></p>
        </div>
       
      </form>
    </div>
  );
};

export default Logincon;