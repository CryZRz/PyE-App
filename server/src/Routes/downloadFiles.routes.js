const {Router} = require("express")
const {downloadPdfArchivesController, downloadXlsxArchivesController} = require("../Controllers/downloadFiles.controller.js")

const downloadFilesRoutes = Router()

downloadFilesRoutes.get("/download/pdf", downloadPdfArchivesController)

downloadFilesRoutes.get("/download/exl", downloadXlsxArchivesController)

module.exports =  downloadFilesRoutes