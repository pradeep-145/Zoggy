const mongoose=require('mongoose');
const UserModel=mongoose.Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String}
})

module.exports=mongoose.model("user",UserModel);