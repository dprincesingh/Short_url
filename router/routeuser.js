import express from "express";
import { handlecreateUser, handleloginuser } from "../controller/user.js";

const routeuser = express.Router();

routeuser.post("/signup", handlecreateUser);
routeuser.post("/login", handleloginuser);

export default routeuser;
