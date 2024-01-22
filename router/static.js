import express from "express";
import urls from "../models/url.js";

const staticroute = express.Router()

staticroute.get('/home',(req,resp)=>{
    resp.render('home')
})

staticroute.get('/signup',(req,resp)=>{
    resp.render('signup')
})

staticroute.get('/login',(req,resp)=>{
    resp.render('login')
})

staticroute.get('/homelogin',async (req,resp)=>{
    const result = await urls.find({})
    console.log(result);
    
    resp.render('homelogin',{result})
})



export default staticroute