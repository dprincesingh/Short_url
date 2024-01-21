import express from "express";

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

staticroute.get('/homelogin',(req,resp)=>{
    resp.render('homelogin')
})



export default staticroute