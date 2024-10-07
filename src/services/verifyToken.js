const jwt = require("jsonwebtoken")
require('dotenv').config()
const secret=process.env.JWT_SECRET
module.exports = (token) => {
    
    return jwt.verify(token,secret)

}