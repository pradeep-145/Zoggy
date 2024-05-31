const mongoose = require('mongoose')
const express=require('express')
const cors=require('cors')
const app=express()
const User=require('./models/UserModel')
app.use(express.json())
app.use(cors())
const PORT=1234
mongoose.connect('mongodb+srv://pradeepsakthis22cse:sps2004@cluster0.adfzslm.mongodb.net/Zoggy?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
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
app.post('/')
app.listen(PORT,()=>{
    console.log(`server is running on the port : ${PORT}`);
})

