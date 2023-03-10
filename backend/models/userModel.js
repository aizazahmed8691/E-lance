import mongoose from "mongoose";



const userSchema=mongoose.Schema({
    name:{
        type:String,

    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    buyer:{
        type:Boolean,
        default:false,
    },

})
const User=mongoose.model('User',userSchema)
export default User