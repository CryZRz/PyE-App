const Exlhandler = require("../createExl")
const PdfHandler = require("../createPDF")
const path = require("path")

const sencondMomentDNGController = async (req, res) => {
    const date = new Date()
    const fileName = `tabla segundo momento datos no agrupados ${date.toDateString()} ${date.toTimeString()}`

    try {
        if (req.query.type == "pdf") {
            const createPdfTable = new PdfHandler(fileName, req.body)
            const fileResult = createPdfTable.writePdfTableSecMontDtsNotGrpd()
            
            res.send(fileName)
        }else{
            const createExlTable = new Exlhandler(fileName,req.body)
            await createExlTable.writeFileTableSecMomtDtNotGrpd()
            
            res.send(fileName)
        }
    } catch (e) {
        res.sendStatus(500)
    }
    
}

const sencondMomentDGController = async (req, res) => {
    const date = new Date()
    const fileName = `tabla segundo momento datos agrupados ${date.toDateString()} ${date.toTimeString()}`

    try {
        if (req.query.type == "pdf") {
            const createPdfTable = new PdfHandler(fileName, req.body)
            await createPdfTable.writePdfTableSecMontDtsGrpd()
                
            res.send(fileName)
        }else{
            const createExlTable = new Exlhandler(fileName,req.body)
            await createExlTable.writeFileTableSecMomtDtGrpd()
            
            res.send(fileName)
        }
    } catch (e) {
        res.sendStatus(500)
    }

}

module.exports = {sencondMomentDNGController, sencondMomentDGController}