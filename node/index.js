const dbConnection = require("./connection/db")
const path = require("path")
const cors = require("cors")


dbConnection.authenticate().then(()=>
{
    console.log("connection established")
}).catch((err)=>console.error("failed"))