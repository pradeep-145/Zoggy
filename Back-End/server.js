require('dotenv').config();
const mongoose = require('mongoose')
const express=require('express')
const cors=require('cors')
const app=express()
const nodemailer=require('nodemailer')
const User=require('./models/UserModel')
const otpgenerator=require('otp-generator')
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())
const PORT=1234
const otp=otpgenerator.generate(6,{upperCaseAlphabets:false, lowerCaseAlphabets:false, specialChars:false})
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log(`DB connected to the port: ${PORT}`);
}).catch(err=> console.log(err))

app.post('/register',(req,res)=>{
    User.create(req.body).then(result=>res.json(result)).catch(err=>res.json(err))
})

app.post('/login',(req,res)=>{
    const {email,password}=req.body;
    User.findOne({email:email}).then(user=>{
        if(user){
            if(user.password==password){
                console.log(email);
                var transporter = nodemailer.createTransport({
                    host:'smtp.gmail.com',
                    port: 465,
                    secure: true,
                    auth: {
                        user: process.env.EMAIL,
                        pass: process.env.APP_PASSWORD
                    }
                });
   
                var mailOptions = {
                    from: process.env.EMAIL,
                    to: email,
                    subject: 'HI...',
                    text: `The otp is ${otp}`
                };
    
                transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                    }
                });
                res.json("success");
            }
            else
            {
                res.json("Incorrect password")
            }
        }
        else{
            res.json("No record found")
        }
    }).catch(err=>res.json(err))
    
})



app.listen(PORT,()=>{
    console.log(`server is running on the port : ${PORT}`);
    
})

