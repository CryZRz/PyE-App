const Exlhandler = require("../createExl")
const PdfHandler = require("../createPDF")

const curtosisController = async (req, res) => {
    const date = new Date()
    const fileName = `tabla curtosis ${date.toDateString()}`

    try {
        if (req.query.type == "pdf" ) {
            const createPdfTable = new PdfHandler(fileName, req.body)
            await createPdfTable.writePdfTableCurtosis()
            

            res.send(fileName)
        }else{
            const createExlTable = new Exlhandler(fileName,req.body)
            await createExlTable.writeFileCurtosis()
    
            res.send(fileName)
        }
    } catch (e) {
        console.log(e)
        res.sendStatus(500)
    }
}

module.exports = curtosisController