import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
export default function validateInfo(values) {
    let errors = {};
  

    // axios.get("http://localhost:8080/form/")
    // .then(response => {
    //   if(response.data.length > 0){
    //     response.data
    //   }
   

    if (!values.username.trim()) {
      errors.username = 'Username required';
    }

    if (!values.name ) {
      errors.name = 'Name required';
    }
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }
    if (!values.address) {
      errors.address = 'Address required';
    }

    if (!values.tel) {
      errors.tel = 'Phone number required';
    } else if (values.tel.length < 10) {
      errors.tel = 'Telephone number needs to be 10 numbers';
    }
  
    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    else if (!values.email){

    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 8) {
      errors.password = 'Password needs to be 8 characters or more';
    }
  
    if (!values.password2) {
      errors.password2 = 'Password is required';
    } else if (values.password2 !== values.password) {
      errors.password2 = 'Passwords do not match';
    }
    return errors;
  }
  