import urls from "../models/url.js";
import ShortUniqueId from "short-unique-id";

async function handlecreateUrl(req,resp){
    const {url} = req.body
    const shorturl = new ShortUniqueId().rnd(8)
    try {
        const result = urls.create({
            url,
            shorturl,
            visitlog:[]
        })
        console.log({shorturl:"Created and added to database "});
        resp.redirect('/homelogin')
    } catch (error) {
        console.error(`msg : ${error}`);
        resp.redirect("/homelogin")
    }
}

export {
    handlecreateUrl

}