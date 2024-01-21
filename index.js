import express from "express";
import path from "path";
import staticroute from "./router/static.js";
import connectDB from "./config/connectDb.js";
import route from "./router/routeuser.js";


const app = express();
const PORT = 3000;

connectDB("mongodb://localhost:27017/shorturlservice")


app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.set("view engine", "ejs");
app.set("views", path.join("./", "views"));

app.use("/",staticroute)
app.use('/',route)







app.listen(process.env.PORT || PORT, () => console.log(`Server is running at http://localhost:${process.env.PORT || PORT}`))

