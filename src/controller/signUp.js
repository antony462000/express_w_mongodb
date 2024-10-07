const signUP = require("../services/signUP")
const responder = require("../shared/responder")

module.exports = async (req, res) => {
    const Responder = new responder(res)
    try {
        var signupUser = await signUP(req.body)
        
        Responder.success({ message: "successfully Signed Up", payload: signupUser })

    } catch (error) {
        Responder.fail(error.message)
    }
}