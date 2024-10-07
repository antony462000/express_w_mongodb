const signIn = require("../services/signIn")
const responder = require("../shared/responder")

module.exports = async (req, res) => {
    const Responder = new responder(res)
    try {
        var signinUser = await signIn(req.body)
        
        Responder.success({ message: "Successfully Logged in", payload: signinUser })
  
    } catch (error) {
        Responder.fail(error.message)
    }
}