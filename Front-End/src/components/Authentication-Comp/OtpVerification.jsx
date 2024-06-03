import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'
const OtpVerification = () => {
    const {email}=useParams();
    const [otp,setOtp]=useState();
    const handleSubmit=(e)=>{
        axios.post(`http://localhost:1234/otpverification/${email}`,{otp})
    }
  return (
    <div>
        <div>
            <p>please Enter the 6 digit OTP has sent to the mail {email}</p>
        </div>
        <div>
            <input type="number" maxLength='6' placeholder='OTP' style={{borderWidth:"2px"}}/><br />
            <button type='submit'>Submit</button>
        </div>
    </div>
  )
}

export default OtpVerification