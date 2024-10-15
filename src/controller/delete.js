const deleteUser = require("../services/delete")
const Responder = require("../shared/responder")

module.exports = async (req, res) => {
    const responder = new Responder(res)
    try {
        req['body']._id = req.user._id
        var result = await deleteUser(req.body)
         return responder.success({ message: "Success", payload: result })

    } catch (error) {
       return responder.fail(error.message)
    }
}