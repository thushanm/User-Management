const express =require("express")
const userController = require("../controller/userController")

const userRoute = express.Router()

userRoute.route('/').post(userController.addUser)
userRoute.route('/getAll').get(userController.getAllUsers)
userRoute.route('/:id').get(userController.getUser)
userRoute.route('/:id').put(userController.updateUser)
userRoute.route('/:id').delete(userController.deleteUser)

console.log("oky express")
module.exports=userRoute;