const update = require("../services/update")
const responder = require("../shared/responder")

module.exports = (req, res) => {
    const Responder = new responder(res)
    try {
        var upadteUser = update(req.body)
        Responder.success({ message: "Successfully Updated", payload: upadteUser })
   
    } catch (error) {
        Responder.fail(error.message)
    }
}