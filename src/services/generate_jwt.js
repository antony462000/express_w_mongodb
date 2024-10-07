const jwt = require("jsonwebtoken")
require('dotenv').config()
const secret=process.env.JWT_SECRET

console.log(process.env)
module.exports=(data)=>{
    console.log(typeof(data))
    console.log(secret)
    return jwt.sign(JSON.parse(JSON.stringify(data)),secret,{expiresIn:8600})
}