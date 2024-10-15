const signUP = require("../services/signUp")
const Responder = require("../shared/responder")

module.exports = async (req, res) => {
    const responder = new Responder(res)
    try {
        var signupUser = await signUP(req.body)
        return responder.success({ message: "successfully Signed Up", payload: signupUser })
    } catch (error) {
        return responder.fail(error.message)
    }
}