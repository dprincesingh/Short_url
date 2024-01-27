import users from "../models/user.js";
import uniqid from 'uniqid';
import { setUser } from "../service/auth.js";

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

async function handleloginuser(req,resp){
  const {email , password} = req.body
  try {
    const result = await users.findOne({email,password})
    if(!result){
     return  resp.status(400).render('signup',{error: "no user found "})
    }

    const token = setUser(result)
    resp.cookie("uid",token)
    const user = result
    console.log(user);
    return resp.status(200).render('homelogin',{user})
  } catch (error) {
    console.log(error);
     return resp.redirect("/home")
  }

}


export {
    handlecreateUser,
    handleloginuser
}