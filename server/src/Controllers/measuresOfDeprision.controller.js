const Exlhandler = require("../createExl")
const PdfHandler = require("../createPDF")
const path = require("path")

const measureOfDesprisionDNGController = async (req, res) => {
    const date = new Date()
    const fileName = `tabla medidas de dispersion datos no agrupados ${date.toDateString()} ${date.toTimeString()}`
    
    try {
        if (req.query.type == "pdf") {
            const createPdfTable = new PdfHandler(fileName, req.body)
            const fileResult = createPdfTable.writePdfTableMofDtsNotGrpd()
    
            res.send(fileName)
        }else{
            const createExlTable = new Exlhandler(fileName,req.body)
            await createExlTable.writeFileTableMoFDtNotGrpd()
    
            res.send(fileName)
        }
    } catch (e) {
        res.sendStatus(500)
    }

}

const measureOfDesprisionDGController = async (req, res) => {
    const date = new Date()
    const fileName = `tabla medidas de dispersion datos agrupados ${date.toDateString()} ${date.toTimeString()}`

    try {
        if (req.query.type == "pdf") {
            const createPdfTable = new PdfHandler(fileName, req.body)
            await createPdfTable.writePdfTableMofDtsGrpd()
    
            res.send(fileName)
    
        }else{
            const createExlTable = new Exlhandler(fileName,req.body)
            await createExlTable.writeFileTableMoFDtGrpd()
    
            res.send(fileName)
        }
    } catch (e) {
        res.sendStatus(500)
    }

}

module.exports = {measureOfDesprisionDNGController, measureOfDesprisionDGController}