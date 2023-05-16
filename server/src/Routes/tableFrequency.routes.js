const {Router} = require("express")
const tableFrequencyController = require("../Controllers/tableFrequency.controller.js")

const tableFrequencyRoutes = Router()

tableFrequencyRoutes.post("/tablefrequency", tableFrequencyController)

module.exports =  tableFrequencyRoutes