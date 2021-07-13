import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';


toast.configure()
export default function validateInfo(values) {
    let errors = {};
  


    if (!values.username.trim()) {
      errors.username = 'Username required';
    }
    else if(values.username != "tharindu"){
       toast("Username invalide") 
    }

    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password=="12345678"){
        toast("login success")
        
        }
        else{
          toast("Password invalide")
          
        }
  
    
    return errors;
  }
  