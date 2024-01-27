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
    if(!req.user) return resp.redirect('/login')

    const result = await urls.find({cretedby:req.user._id})
   


    resp.render('homelogin',{result})
})



export default staticroute