import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const useLog = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    password: '',
    });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
 
    setErrors(validate(values));
    // if(validate(values)){
    //   console.log("erros");
  
    // }
    // else if (setIsSubmitting(true)){
    //   console.log("no erros");

   
    // }
     setIsSubmitting(true);

    // const form = {
    //   name: values.name,
    //   address: values.address,
    //   tel: values.tel,
    //   username: values.username,
    //   email: values.email,
    //   password: values.password
    // }
    
    // axios.post('http://localhost:8080/form/add',form )
    // .then((res) => {
      
    //   console.log(res.data)
      
    //   if(res.data.warn){
    //     alert (res.data.warn)
    //   }
      
    
    // });
    
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useLog;
