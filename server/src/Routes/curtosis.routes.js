const {Router} = require("express")
const curtosisController = require("../Controllers/curtosis.controller.js")

const curtosisRoutes = Router()

curtosisRoutes.post("/curtosis", curtosisController)

module.exports =  curtosisRoutes