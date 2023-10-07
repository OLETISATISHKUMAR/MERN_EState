const exprees = require("express")
const route = exprees.Router()

const userController = require("../controllers/user.controller")

route.post("/signup", userController.create)
route.post("/login", userController.login)
module.exports = route