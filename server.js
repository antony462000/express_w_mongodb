const express = require ("express")
const router = require("./src/router")
const app = express()
const port = 3000
app.use(express.json())
app.use(express.urlencoded({extended:false}))


 app.listen(port,()=>{
      console.log(`localhost listening at http://localhost:${port}/`)
        })

app.use("/user",router)