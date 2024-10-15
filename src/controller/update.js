const update = require("../services/update")
const Responder = require("../shared/responder")

module.exports = async (req, res) => {
    const responder = new Responder(res)
    try {
        req['body']._id =req.user._id
        var upadteUser =await update(req.body)
        return responder.success({ message: "Successfully Updated", payload: upadteUser })
   
    } catch (error) {
        return responder.fail(error.message)
    }
}