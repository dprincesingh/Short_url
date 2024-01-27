import mongoose from "mongoose";

const urlschema = new mongoose.Schema({
    url:{
        type : String,
        required: true
    },
    shorturl:{
        type: String,
        required : true ,
        unique:true
    },
    visitlog:[{timestamps:{type:Number}}],
    cretedby : {
        type:mongoose.Schema.Types.ObjectId,ref: "users"
    }
},{timestamps:true})


const urls = mongoose.model("urls",urlschema)

export default urls