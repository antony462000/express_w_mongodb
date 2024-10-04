const _delete = require("../services/delete")
const responder = require("../shared/responder")

module.exports = (req, res) => {
    const Responder = new responder(res)
    try {
        var deleteUser = _delete(rreq.body)
        Responder.success({ message: "Success", payload: deleteUser })

    } catch (error) {
        Responder.fail(error.message)
    }
}