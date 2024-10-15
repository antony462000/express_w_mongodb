const deleteUser = require('./controller/delete')

const signIn = require('./controller/signIn')
const signUp = require('./controller/signUp')
const udateUser = require('./controller/update')
const authentication = require('./middleware/authentication')
const fileUpload = require('./middleware/fileUpload')
const multipleFileUpload = require('./controller/multipleFileUpload')
const multer  = require('multer')
const upload = multer({ dest: 'uploads', filename:(req, file, cb)=>{
    cb(null, Date.now() + "-" + file.originalname)
} })

const router = require('express').Router()

router.post("/signUp",fileUpload,signUp)
router.get('/signin',signIn)
router.get('/update',authentication,udateUser)
router.delete('/delete',authentication,deleteUser)
router.post("/mutipleFileUpload",upload.array('images'),multipleFileUpload )
module.exports = router