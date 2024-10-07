const _delete = require("../services/delete")
const responder = require("../shared/responder")

module.exports = async (req, res) => {
    const Responder = new responder(res)
    try {
        req['body']._id = req.user._id
        var deleteUser = await _delete(req.body)
        Responder.success({ message: "Success", payload: deleteUser })

    } catch (error) {
        Responder.fail(error.message)
    }
}