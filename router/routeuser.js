import express from "express";
import { handlecreateUser } from "../controller/user.js";

const routeuser = express.Router()




routeuser.post('/signup',handlecreateUser)









export default routeuser