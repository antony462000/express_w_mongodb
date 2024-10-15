const mongoose =require("mongoose")

const studentSchema = new mongoose.Schema({
    college:String,
    profile_pic:String,
    user_id:{type:mongoose.Schema.Types.ObjectId,ref:"user"},
    department_id:{type:mongoose.Schema.Types.ObjectId,ref:"department"}
}) 

const Students = mongoose.model('student',studentSchema)

module.exports = Students