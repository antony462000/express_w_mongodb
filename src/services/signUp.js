const { User, Student,Department } = require("../models")

module.exports = async (data) =>{
    try {
        const user= await User.insertMany({
            name:data.name,
            email:data.email,
            password:data.password
        })
        
        const student= await Student.insertMany({
            college:data.college,
            user:user.id,
        })
        
        const Departments= await Department.insertMany({
            deptName:data.deptName
        })
        console.log(data.name)

        return "Succesfull"
              
            } catch (error) {
                console.log(error)
            }
    
}