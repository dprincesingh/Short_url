import users from "../models/user.js";


async function handlecreateUser(req, resp) {
  const { name, email, password } = req.body;
  try {
    const user = await users.create({
      name,
      email,
      password,
    });
    console.log({ Usercreated: true, user });
    resp.redirect("/login");
  } catch (error) {
    console.error(error);
    resp.redirect("/signup");
  }
}

async function handlelogin(req,resp){
  
}


export {
    handlecreateUser
}