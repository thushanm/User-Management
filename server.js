const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config({path:'config.env'})
const app = require("./app")

const localDB = process.env.DATABASE_LOCAL;

mongoose.connect(localDB).then(()=>console.log(`mongoose DB is Connected ${localDB}`))

const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`App Running With ${port}`)

})

