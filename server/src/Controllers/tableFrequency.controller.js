const Exlhandler = require("../createExl")
const PdfHandler = require("../createPDF")
const path = require("path")

const tableFrequencyController = async  (req, res) => {
    const date = new Date()
    const fileName = `tabla frecuencias ${date.toDateString()} ${date.toTimeString()}`

    try {
        if (req.query.type == "pdf") {
            const createPdfTable = new PdfHandler(fileName, req.body)
            await createPdfTable.writePdfTableFrequency()
    
            res.send(fileName)
        }else{
            const createExlTable = new Exlhandler(fileName,req.body)
            await createExlTable.writeFileTableFrequency()
    
            res.send(fileName)
        }
    } catch (e) {
        res.sendStatus(500)
    }
    
}

module.exports = tableFrequencyController