const { User, Department, Student } = require("../models")

module.exports = async (data) => {
    try {
        let user,dept,students
        if (data.name || data.email || data.password) {

            user = await User.updateOne(
                {
                    _id: data._id
                },
                {
                    $set: {
                        name: data.name,
                        email: data.email,
                        password: data.password
                    }
                }
            )
        }
        if (data.deptName) {
            dept = await Department.findOne(
                {
                    deptName: data.deptName
                }
            )
        }

        if (dept || data.college) {
            students = await Student.updateOne(
                {
                    user_id: data._id
                },
                {
                    $set: {
                        college: data.college,
                        department_id: dept._id
                    }
                }
            )
        }

        return { user, students }
    } catch (error) {
        throw error
    }

}