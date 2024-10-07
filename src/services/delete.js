const { User, Student} = require ("../models")
let userToDelete,student
module.exports = async (data) =>{
   try {
      userToDelete = await User.deleteOne(
        {
            _id:data._id
        }
    )


    student= await Student.deleteOne(
        {
            user_id:data._id
        }
    )
  console.log(":::::::",userToDelete,":::::::",student)
    return { userToDelete,student}
   } catch (error) {
    throw error
   }
   
}