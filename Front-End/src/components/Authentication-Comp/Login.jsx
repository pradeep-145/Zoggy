import React, { useState } from 'react'

const Login = () => {
  const [email,setEmail]=useState();
  const [password,setPass]=useState();


  return (
    <div className='container'>
<form action="/home" method='get'><br />
    <input type="email" placeholder='email' required/><br />
    <input type="password" placeholder='password' required /><br />
    <button type="submit"  >Login</button><br />
    <a href="/register">New to zoggy, click here!</a>

</form>

    </div>
  )
}

export default Login