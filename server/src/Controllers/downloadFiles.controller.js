const pathSrc = require("../pathSrc.js")
const path = require("path")

const downloadPdfArchivesController = (req, res)=>{
    if (req.query.file == undefined) {
        res.sendStatus(404)
    }else{
        const pathFile = path.join(pathSrc, 'pdfArchives',`${req.query.file}.pdf`)
        res.setHeader('Content-Disposition', `attachment; filename=${req.query.file}.pdf`)
        res.setHeader('Content-Type', 'application/pdf')

        res.sendFile(pathFile)
    }
}

const downloadXlsxArchivesController = (req, res)=>{
    if (req.query.file == undefined) {
        res.sendStatus(404)
    }else{
        const pathFile = path.join(pathSrc, 'excelArchives',`${req.query.file}.xlsx`)
        res.setHeader('Content-Disposition', `attachment; filename=${req.query.file}.xlsx`)
        res.sendFile(pathFile)
    }
}

module.exports = {downloadPdfArchivesController, downloadXlsxArchivesController}