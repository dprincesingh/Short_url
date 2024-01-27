import jwt  from "jsonwebtoken"
const key = "Prince$singh"

function setUser (user){
    const payload = {
        name: user.name,
        _id : user._id,
        email : user.email
    }
    return jwt.sign(payload, key)
}
function getUser (token){
    if(!token)return null 
    try {
        return jwt.verify(token,key)
        
    } catch (error) {
        return null 
    }



}
export {
    setUser,
    getUser
}