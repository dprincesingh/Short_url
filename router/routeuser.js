import express from "express";
import { handlecreateUser } from "../controller/user.js";

const route = express.Router()




route.post('/signup',handlecreateUser)









export default route