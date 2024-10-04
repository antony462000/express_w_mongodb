const mongoose =require("mongoose")
mongoose.connect('mongodb://127.0.0.1:27017/crud')

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const departmentSchema = new mongoose.Schema({
    deptName:String
})

const studentSchema = new mongoose.Schema({
    college:String,
    user:{type:mongoose.Schema.Types.ObjectId},
    department:{type:mongoose.Schema.Types.ObjectId,ref:"Departments"}
}) 

const Users = mongoose.model('user',userSchema)
const Departments = mongoose.model('department',departmentSchema)
const Students = mongoose.model('student',studentSchema)



const Users_1 = new Students({
    college:"SJCET",
    user:"antonycyriact@gmail.com",
    department:"66fe42b6c2591ef835255390"
})



module.exports = {Users,Departments,Students}