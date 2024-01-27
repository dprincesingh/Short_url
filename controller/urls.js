import urls from "../models/url.js";
import ShortUniqueId from "short-unique-id";

async function handlecreateUrl(req, resp) {
  const { url } = req.body;
  console.log(url);

  if (!url) {
    return resp.status(400).render("homelogin", { error: "URL is required" });
  }

  const shorturl = new ShortUniqueId().rnd(8);

  try {
    const result = await urls.create({
      url,
      shorturl,
      visitlog: [],
      cretedby:req.user._id
    });

    console.log({ shorturl: "Created and added to database " });
    return resp.redirect("/homelogin", { msg: "succes" });
  } catch (error) {
    console.error(`msg : ${error}`);
    resp.redirect("/homelogin");
  }
}

async function handleshorturl(req, resp) {
  const shorturl = req.params.shorturl;

  try {
    const result = await urls.findOneAndUpdate(
      { shorturl },
      {
        $push: {
          visitlog: { timestamps: Date.now() },
        },
      }
    );
    resp.redirect(result.url);
  } catch (error) {
    resp.send({ error });
  }
}

export { handlecreateUrl, handleshorturl };
