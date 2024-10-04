const mongoose =require("mongoose")

const departmentSchema = new mongoose.Schema({
    deptName:String
})

const Departments = mongoose.model('department',departmentSchema)

module.exports = Departments