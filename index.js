import express from "express";
import path from "path";
import staticroute from "./router/static.js";
import connectDB from "./config/connectDb.js";
import routeuser from "./router/routeuser.js";
import cookieParser from "cookie-parser";
import routeurl from "./router/routeurl.js";
import { logInUserOnly ,checkauth } from "./middleware/authuser.js";
const app = express();
const PORT = 3000;

connectDB("mongodb://localhost:27017/shorturlservice")


app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({extended:false}))
app.set("view engine", "ejs");
app.set("views", path.join("./", "views"));

app.use("/", checkauth,staticroute)
//login and signup 
app.use('/',routeuser)    
//url create 
app.use("/",logInUserOnly,routeurl)






app.listen(process.env.PORT || PORT, () => console.log(`Server is running at http://localhost:${process.env.PORT || PORT}/home`))

