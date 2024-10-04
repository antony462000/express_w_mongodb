const _delete = require('./controller/delete')
const signIn = require('./controller/signIn')
const signUp = require('./controller/signUp')
const update = require('./controller/update')

const router = require('express').Router()
console.log(("HIIIIIIIIII"))
router.post("/signUp",signUp)
router.get('/signin',signIn)
router.get('/update',update)
router.delete('/delete',_delete)
module.exports = router