require('dotenv').config();
const mongoose = require('mongoose')
const express=require('express')
const cors=require('cors')
const app=express()
const nodemailer=require('nodemailer')
const User=require('./models/UserModel')
app.use(express.json())
app.use(cors())
const PORT=1234

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log(`DB connected to the port: ${PORT}`);
}).catch(err=> console.log(err))

app.post('/register',(req,res)=>{
    User.create(req.body).then(result=>res.json(result)).catch(err=>res.json(err))
})

app.post('/',(req,res)=>{

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
        to: 'chitrasridharan1980@gmail.com',
        subject: 'HI...',
        text: 'That was easy!'
    };
    
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    
})
    app.post('/login',(req,res)=>{
    const {email,password}=req.body;
    User.findOne({email:email}).then(user=>{
        if(user){
            if(user.password==password){
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

