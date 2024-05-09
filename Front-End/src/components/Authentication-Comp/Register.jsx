import React from 'react'

const Register = () => {
  return (
    <div className='container'>

      <form action="/login">
      <input type="text" placeholder='username' /><br />
      <input type="password" placeholder='password' /><br />
      <input type="password" placeholder='Re-Enter password' /><br />
      <input type="submit" value={'Register'} /><br />
      </form>
    </div>
  )
}

export default Register