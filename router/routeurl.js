import express from "express"
import { handlecreateUrl, handleshorturl } from "../controller/urls.js"

const routeurl = express.Router()

routeurl.post("/url",handlecreateUrl)
routeurl.get("/:shorturl",handleshorturl)


export default routeurl