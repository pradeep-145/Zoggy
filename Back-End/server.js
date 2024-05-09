const mongoose = require('mongoose')
const express=require('express')
const cors=require('cors')
const app=express()
app.use(express.json())
app.use(cors())
const PORT=1234
mongoose.connect('mongodb+srv://pradeepsakthis22cse:sps2004@cluster0.adfzslm.mongodb.net/Zoggy?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
    console.log(`DB connected to the port: ${PORT}`);
}).catch(err=> console.log(err))
app.get('/',(req,res)=>{
    
})
app.listen(PORT,()=>{
    console.log(`server is running on the port : ${PORT}`);
})

