import { useState } from "react";
import axios from 'axios';
import cookie from 'js-cookie';
import jwt_decode from 'jwt-decode';


function Login(){
  const [formData,setFormData]=useState({
    email:'',
    password:''
  })
  

  const setToken = token => {
    cookie.set("token", token);
    
  };

  const handleChange=(e)=>{
     const{name,value}=e.target;
     setFormData((prevFormData)=>({
        ...prevFormData,
        [name]:value
     }))
  }

  const handleSubmit=async (e)=>{
    e.preventDefault();
    try{
      console.log(formData)
      const res=await axios.post("http://localhost:4000/server/auth/login", {formData})
      setToken(res.data);
      

      window.location.replace('/main')
      //console.log(res.data);
    }
    catch(error){
        console.error('Error occurred during signup:', error);
    }
  }

  return (
   <>
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div>
        <label htmlFor="email">Email:</label>
        <input
         type="text"
         id="email"
         name="email"
         value={formData.email}
         onChange={handleChange}/>
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  
   </>)
}

export default Login;