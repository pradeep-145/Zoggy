import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
const OtpVerification = () => {
    const {email}=useParams();
    const [otp,setOtp]=useState();
    const navigate = useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post(`http://localhost:1234/otpverification/${email}`,{otp}).then((result)=>{
            if(result.data=='success'){
                navigate('/home');
            }
            else{
                alert("Please enter correct otp!!");
            }
        })
    }
  return (
    <div>
        <div>
            <p>please Enter the 6 digit OTP has sent to the mail {email}</p>
        </div>
        <div>
            <input type="number" maxLength='6' placeholder='OTP' style={{borderWidth:"2px"}}  onChange={(e)=>setOtp(e.target.value)}/><br />
            <button type='submit' onClick={handleSubmit}>Submit</button>
        </div>
    </div>
  )
}

export default OtpVerification