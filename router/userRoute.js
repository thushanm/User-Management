const express =require("express")
const userController = require("../controller/userController")

const userRoute = express.Router()

userRoute.route('/').post(userController.addUser)

module.exports=userRoute;