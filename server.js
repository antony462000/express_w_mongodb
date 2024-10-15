const express = require("express")
const router = require("./src/router")
const app = express()
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
const port = 3000
app.listen(port, () => {
  console.log(`localhost listening at http://localhost:${port}/`)
})

app.use("/user", router)

