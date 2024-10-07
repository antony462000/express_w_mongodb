const _delete = require('./controller/delete')
const signIn = require('./controller/signIn')
const signUp = require('./controller/signUp')
const update = require('./controller/update')
const authentication = require('./middleware/authentication')
const router = require('express').Router()

router.post("/signUp",signUp)
router.get('/signin',signIn)
router.get('/update',authentication,update)
router.delete('/delete',authentication,_delete)
module.exports = router