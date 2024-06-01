import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const Register = () => {


  const [name, setName]=useState();
  const [email,setEmail]=useState();
  const [pass,setPass]=useState();
  const [confpass,setConfpass]=useState();
  const navigate=useNavigate();

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(pass===confpass){

      axios.post("http://localhost:1234/register",{name,email,pass}).then(result=>{
        console.log(result);
        navigate('/login');
      }).catch(err=>console.log(err))
    }
    else{
      alert("Please recheck password!!");
    }
  }
  
  return (
    <div className='container'>

      <form action="/login">
      <input type="text" placeholder='username' onChange={(e)=>setName(e.target.vale)}required/><br />
      <input type="email" placeholder='email'onChange={(e)=>setEmail(e.target.vale)} required/><br />

      <input type="password" placeholder='password' onChange={(e)=>setPass(e.target.vale)} required/><br />
      <input type="password" placeholder='Re-Enter password' onChange={(e)=>setConfpass(e.target.vale)}required/><br />
      <button type="submit" onClick={(e)=>handleSubmit(e)}>Register</button><br />
      </form>
    </div>
  )
}

export default Register