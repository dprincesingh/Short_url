import { getUser } from "../service/auth.js";

async function logInUserOnly(req, resp, next) {
  const token = req.cookies.uid;

  if (!token) return resp.redirect("/login");
  const user = getUser(token);
  if (!user) return resp.redirect("/login");
  req.user = user
  next();
}
async function checkauth(req, resp, next) {
  const token = req.cookies.uid;


  const user = getUser(token);

  req.user = user
  next();
}

export { logInUserOnly ,checkauth};
