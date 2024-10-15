const signIn = require("../services/signIn")
const Responder = require("../shared/responder")

module.exports = async (req, res) => {
    const responder = new Responder(res)
    try {
        var signinUser = await signIn(req.body)
        
       return responder.success({ message: "Successfully Logged in", payload: signinUser })
  
    } catch (error) {
       return responder.fail(error.message)
    }
}