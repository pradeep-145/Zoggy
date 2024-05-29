const mongoose=require('mongoose');
const RestaurantModel=mongoose.Schema({
    name:{type:String},
    email:{type:String, unique:true},
    password:{type:String}
})

module.exports=mongoose.model("restaurants",RestaurantModel);