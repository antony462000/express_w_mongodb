const verifyToken = require("../services/verifyToken")
const responder = require("../shared/responder")
module.exports=(req,res,next)=>{
    const Responder = new responder(res)
try {
    const token = req.headers.token
    if(!token) throw new Error("Un authorized!")
    const user = verifyToken(token)
    req['user']=user    
    next()
} catch (error) {
    Responder.fail(error.message)
}
    
}