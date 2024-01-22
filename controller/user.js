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


    resp.render("signup",{
      user
    });
  } catch (error) {
    console.error({messege:error});
    resp.redirect("/signup");
  }
}

async function handlelogin(req,resp){
  
}


export {
    handlecreateUser
}