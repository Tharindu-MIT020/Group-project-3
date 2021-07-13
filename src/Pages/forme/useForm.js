import axios from 'axios';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    name:'',
    address:'',
    tel:'',
    username: '',
    email: '',
    password: '',
    password2: ''
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

    const form = {
      name: values.name,
      address: values.address,
      tel: values.tel,
      username: values.username,
      email: values.email,
      password: values.password
    }
    
    axios.post('http://localhost:8080/form/add',form )
    .then((res) => {
      
      console.log(res.data)
      
      if(res.data.warn){
        toast (res.data.warn,
          {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
      }
      
    
    });
    
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

export default useForm;
