const mongoose =require("mongoose")

mongoose.connect('mongodb://127.0.0.1:27017/crud')


const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const Users = mongoose.model('user',userSchema)
module.exports = Users