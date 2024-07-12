const express =require("express")
const userController = require("../controller/userController")

const userRoute = express.Router()

userRoute.route('/').post(userController.addUser)
userRoute.route('/getAll').get(userController.getAllUsers)
userRoute.route('/').get(userController.getUser)
userRoute.route('/').put(userController.updateUser)
userRoute.route('/').delete(userController.deleteUser)


module.exports=userRoute;