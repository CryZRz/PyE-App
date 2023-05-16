const {Router} = require("express")
const {measureOfDesprisionDNGController, measureOfDesprisionDGController} = require("../Controllers/measuresOfDeprision.controller.js")

const measureOfDesprisionRoutes = Router()

measureOfDesprisionRoutes.post("/measures-of-dispersion-dates-not-grouped", measureOfDesprisionDNGController)

measureOfDesprisionRoutes.post("/measures-of-dispersion-dates-grouped", measureOfDesprisionDGController)

module.exports =  measureOfDesprisionRoutes