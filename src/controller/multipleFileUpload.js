const multipleFileUpload = require("../services/multipleFileUpload")

module.exports=async (req,res)=>{
    try {
        console.log(req.files)
        var multipleFiles = await multipleFileUpload(req.files)
        res.send(multipleFiles)
    } catch (error) {
        
    }
}