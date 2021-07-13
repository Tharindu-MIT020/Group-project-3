import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './form.css';

import { Link } from 'react-router-dom';
import { Component } from 'react';



const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
            Join V Graphics 
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Name</label>
          <input
            className='form-input'
            type='text'
            name='name'
            placeholder='Enter your Name'
            value={values.name}
            onChange={handleChange}
            
          />
          {errors.name && <p>{errors.name}</p>}
          </div>
          <div className='form-inputs'>
          <label className='form-label'>Address</label>
          <input
            className='form-input'
            type='text'
            name='address'
            placeholder='Enter your Address'
            value={values.address}
            onChange={handleChange}
            
          />
          {errors.address && <p>{errors.address}</p>}
          </div>
          <div className='form-inputs'>
          <label className='form-label'>Telephone</label>
          <input
            className='form-input'
            type='text'
            name='tel'
            placeholder='Enter your tp Number'
            value={values.tel}
            onChange={handleChange}
            
          />
          {errors.tel && <p>{errors.tel}</p>}
          </div>
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
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
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
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Register
        </button>
        <div>
        <p className= 'form-haveac'> Already have an account? Login <Link to="/login"> here</Link></p>
        </div>
       
      </form>
    </div>
  );
};

export default FormSignup;
