const mongoose =require("mongoose")

const studentSchema = new mongoose.Schema({
    college:String,
    user:{type:mongoose.Schema.Types.ObjectId,ref:"Users"},
    department:{type:mongoose.Schema.Types.ObjectId,ref:"Departments"}
}) 

const Students = mongoose.model('student',studentSchema)

module.exports = Students