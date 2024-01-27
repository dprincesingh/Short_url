import mongoose, { mongo }  from "mongoose";
import { type } from "os";


const userschema = new mongoose.Schema({
  
    name:{
        type :String,
        required: true,
        
    },
    email:{
        type :String,
        required: true,
        unique: true
        
    },
    password:{
        type :String,
        required: true,
        
    }
},{timestamps:true})

const users = mongoose.model("users",userschema)

export default users