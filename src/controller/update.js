const update = require("../services/update")
const responder = require("../shared/responder")

module.exports = async (req, res) => {
    const Responder = new responder(res)
    try {
        req['body']._id =req.user._id
        var upadteUser =await update(req.body)
        Responder.success({ message: "Successfully Updated", payload: upadteUser })
   
    } catch (error) {
        Responder.fail(error.message)
    }
}