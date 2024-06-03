import React, { useState } from 'react'
import {Link ,useNavigate} from 'react-router-dom'
import OtpVerification from './OtpVerification';
import axios from 'axios'
const Login = () => {
  const [email,setEmail]=useState();
  const [password,setPass]=useState();
  const navigate=useNavigate();
  const handleSubmit=(e)=>{
      e.preventDefault(); 
      axios.post('http://localhost:1234/login',{email,password}).then(result=>{
      console.log(result)
      if(result.data=="success")
      navigate(`/otpverification/${email}`);
  
  })
      .catch(err=>console.log(err))
     
  }
  return (
    <div className='container'>
<form onSubmit={handleSubmit}method='get'><br />
    <input type="email" placeholder='email' onChange={e=>setEmail(e.target.value)} required/><br />
    <input type="password" placeholder='password' onChange={e=>setPass(e.target.value)} required /><br />
    <button type="submit"  >Send Otp</button><br />
    <a href="/register">New to zoggy, click here!</a>

</form>

    </div>
  )
}

export default Login