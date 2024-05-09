import React from 'react'

const Login = () => {
  return (
    <div className='container'>
<form action="/home" method='get'>
    <input type="text" placeholder='username' /><br />
    <input type="password" placeholder='password' /><br />
    <input type="submit" value={'Login'} /><br />
    <a href="/register">New to zoggy, click here!</a>

</form>

    </div>
  )
}

export default Login