const { User, Student, Department } = require("../models")
const fileUpload = require("../middleware/fileUpload")

module.exports = async (data) => {

    try {
        
        console.log(data)
        const dept = await Department.findOne({
            deptName: data.deptName
        })
        
        if (!dept) throw new Error("NO DEPARTMENT")

        const user = await User.create({
            name: data.name,
            email: data.email,
            password: data.password
        })

        await Student.create({
            college: data.college,
            profile_pic:data.profile_pic,
            user_id: user._id,
            department_id: dept._id
        })


    } catch (error) {
        console.log(error)
        throw error
    }

}