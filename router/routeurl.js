import express from "express"
import { handlecreateUrl } from "../controller/urls.js"

const routeurl = express.Router()

routeurl.post("/homelogin",handlecreateUrl)


export default routeurl