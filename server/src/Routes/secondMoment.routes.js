const {Router} = require("express")
const {sencondMomentDNGController, sencondMomentDGController} = require("../Controllers/secondMoment.controller.js")

const secondMomentRoutes = Router()

secondMomentRoutes.post("/second-moment-dates-not-grouped", sencondMomentDNGController)

secondMomentRoutes.post("/second-moment-dates-grouped", sencondMomentDGController)

module.exports =  secondMomentRoutes