const { User } = require("../models")
const generate_jwt = require("./generate_jwt")

module.exports = async (data) => {
    try {
        const userDetail = await User.findOne({
            email: data.email,
            password: data.password
        })
        
        if (!userDetail) throw new Error("***NO USER FOUND***")

       const  allDetails = await User.aggregate([
            {
                $match: { _id: userDetail._id, }
            },

            {
                $lookup: {
                    from: "students",
                    localField: "_id",
                    foreignField: "user_id",
                    as: "students"
                }
            },

            {
                $unwind: {
                    path: "$students",
                    preserveNullAndEmptyArrays: true
                }
            },

            {
                $lookup: {
                    from: "departments",
                    localField: "students.department_id",
                    foreignField: "_id",
                    as: "department"
                }
            },

            {
                $project: {
                    _id: 1,
                    'password': 0,
                    'students._id': 0,
                    'students.user_id': 0,
                    'students.department_id': 0,
                    'department._id': 0
                }
            }
    ])
        
        
        return generate_jwt(allDetails[0])

    } catch (error) {
        
        throw error
    }
}