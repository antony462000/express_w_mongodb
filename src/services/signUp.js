const { User, Student, Department } = require("../models")

module.exports = async (data) => {
    try {
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
            user_id: user._id,
            department_id: dept._id
        })

    } catch (error) {
        console.log(error)
        throw error
    }

}