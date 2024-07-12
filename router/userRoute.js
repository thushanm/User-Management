const express =require("express")
const userController = require("../controller/userController")

const userRoute = express.Router()

userRoute.route('/').post(userController.addUser)
userRoute.route('/').get(userController.getAllUsers)


module.exports=userRoute;