const PDFDocument = require("pdfkit-table")
const fs = require('fs')
const path = require('path')

class createPdfHandler {
    constructor(filename, data, res){
        this.data = data
        this.path = path.join(__dirname, 'pdfArchives',`${filename}.pdf`)
        this.pathImage = path.join(__dirname, 'staticFilesPdf',`ugescudoblackandwhithe.png`)
        this.pathFontFamily = path.join(__dirname, 'staticFilesPdf',`BerkshireSwash-Regular.ttf`)
    }

    convertColumns(params){
        const list = params
        const listConvert = []

        console.log(params)

        for (let y = 0; y < this.data.nRows; y++) {
            listConvert.push([])
        }

        for (let i = 0; i < this.data.nRows; i++) {
            for (let j = 0; j < list.length; j++) {
                let arrone = list[j]
                listConvert[i].push(arrone[i])
            }
        }
       return listConvert
    }

   async writePdfTableFrequency(){
        const doc = new PDFDocument({margin: 20})

        const listArrsConvert = [
            this.data.rowsK, this.data.rowsLi,
            this.data.rowsLs, this.data.marca,
            this.data.rowsfi, this.data.rowsfr,
            this.data.rowsFi, this.data.rowsFrPr
        ]
        
        const listRows = this.convertColumns(listArrsConvert)

        const tableFrequency = {
            title: "Tabla frecuencias",
            subtitle: `Datos: ${this.data.rowsIn}`,
            headers: ["K", "Li", "Ls", "Marca", "fi", "fr", "Fi", "Fr%"],
            rows: listRows
        }

        doc.image(this.pathImage, {
            fit: [130, 130],
            align: 'right',
            valign: 'right',
        })

        doc.fontSize(16).font(this.pathFontFamily).text("PyE App", 500, 35)      

        doc.text("",0,90) 

        doc.table(tableFrequency, {})

        doc.fontSize(10).text(`Numero de datos: ${this.data.dataResults.nDates}`)
        doc.fontSize(10).text(`Min: ${this.data.dataResults.xMin}`)
        doc.fontSize(10).text(`max: ${this.data.dataResults.xMax}`)
        doc.fontSize(10).text(`Rango: ${this.data.dataResults.range}`)
        doc.fontSize(10).text(`K1: ${this.data.dataResults.xKOne}`)
        doc.fontSize(10).text(`K2: ${this.data.dataResults.xKTwo}`)

        doc.pipe(fs.createWriteStream(this.path))

        await doc.end()
    }

    async writePdfTableSecMontDtsNotGrpd(){
        const doc = new PDFDocument({margin: 20})

        const tableSecMontDtsGrpd = {
            title: "Tabla segundo momento no datos agrupados",
            subtitle: `Datos: ${this.data.rowsIn}`,
            headers: ["Media aritmetica", "Rango medio", "Posición"],
            rows: [[this.data.dataResults.AritAv, this.data.dataResults.MiddRan, 
                this.data.dataResults.position]]
        }

        doc.image(this.pathImage, {
            fit: [130, 130],
            align: 'right',
            valign: 'right',
        })

        doc.fontSize(16).font(this.pathFontFamily).text("PyE App", 500, 35)      

        doc.text("",0,90)

        doc.table(tableSecMontDtsGrpd)

        doc.pipe(fs.createWriteStream(this.path))

        await doc.end()
    }

    async writePdfTableSecMontDtsGrpd(){
        const doc = new PDFDocument({margin: 20})

        const listArrsConvert = [
            this.data.rowsLi, this.data.rowsLs,
            this.data.rowsX, this.data.rowsf,
            this.data.rowsxf, this.data.rowsxF,
        ]
        
        const listRows = this.convertColumns(listArrsConvert)

        const tableSecMontDtsGrpd = {
            title: "Tabla segundo momento datos agrupados",
            headers: ["Li", "Ls", "X", "f", "xf", "F"],
            rows: listRows
        }

        doc.image(this.pathImage, {
            fit: [130, 130],
            align: 'right',
            valign: 'right',
        })

        doc.fontSize(16).font(this.pathFontFamily).text("PyE App", 500, 35)      

        doc.text("",0,90) 

        doc.table(tableSecMontDtsGrpd, {})

        doc.fontSize(10).text(`Moda: ${this.data.dataResults.fashion}`)
        doc.fontSize(10).text(`Mediana: ${this.data.dataResults.median}`)

        doc.pipe(fs.createWriteStream(this.path))

       await doc.end()
        
    }

    async writePdfTableMofDtsNotGrpd(){
        const doc = new PDFDocument({margin: 20})

        const tableSecMontDtsGrpd = {
            title: "Tabla medidas de disperión datos no agrupados",
            subtitle: `Datos: ${this.data.rowsIn}`,
            headers: ["X Testada", "Varianza", "Desviasión"],
            rows: [[this.data.dataResults.xtested, this.data.dataResults.variance, 
                this.data.dataResults.standardDeviation]]
        }

        doc.image(this.pathImage, {
            fit: [130, 130],
            align: 'right',
            valign: 'right',
        })

        doc.fontSize(16).font(this.pathFontFamily).text("PyE App", 500, 35)      

        doc.text("",0,90)

        doc.table(tableSecMontDtsGrpd)

        doc.pipe(fs.createWriteStream(this.path))

        await doc.end()
        
    }

   async writePdfTableMofDtsGrpd(){
        const doc = new PDFDocument({margin: 20})

        const listArrsConvert = [
            this.data.rowsLi, this.data.rowsLs,
            this.data.rowsX, this.data.rowsf,
            this.data.rowsxf, this.data.rowsx_x,
            this.data.rowsx_x2, this.data.rowsx_x2f,
        ]
        
        const listRows = this.convertColumns(listArrsConvert)

        const tableMofDtsGrpd = {
            title: "Tabla medidas de dispersión datos agrupados",
            headers: ["Li", "Ls", "X", "f", "xf", "x-x", "x-x^2", "x-x^2f"],
            rows: listRows
        }

        doc.image(this.pathImage, {
            fit: [130, 130],
            align: 'right',
            valign: 'right',
        })

        doc.fontSize(16).font(this.pathFontFamily).text("PyE App", 500, 35)      

        doc.text("",0,90) 

        doc.table(tableMofDtsGrpd, {})

        doc.fontSize(10).text(`X Testada: ${this.data.dataResults.xTested}`)
        doc.fontSize(10).text(`Varianza: ${this.data.dataResults.variance}`)
        doc.fontSize(10).text(`Desviasión: ${this.data.dataResults.standardDeviation}`)

        doc.pipe(fs.createWriteStream(this.path))

        await doc.end()

    }

    async writePdfTableCurtosis(){
        const doc = new PDFDocument({margin: 20})

        const listArrsConvert = [
            this.data.rowsX, this.data.rowsx_xTested, 
            this.data.rowsx_xTested2, this.data.rowsx_xTested4
        ]
        
        const listRows = this.convertColumns(listArrsConvert)

        const tableArray = {
            title: "Tabla curtosis",
            headers: ["X", "x-x", "x-x^2", "x-x^4"],
            rows: listRows
        }

        doc.image(this.pathImage, {
            fit: [130, 130],
            align: 'right',
            valign: 'right',
        })

        doc.fontSize(16).font(this.pathFontFamily).text("PyE App", 500, 35)      

        doc.text("",0,90) 

        doc.table( tableArray, {})

        doc.fontSize(10).text(`X: ${this.data.dataResults.xTested}`)
        doc.fontSize(10).text(`Varianza: ${this.data.dataResults.variance}`)
        doc.fontSize(10).text(`Desviasión: ${this.data.dataResults.deviation}`)
        doc.fontSize(10).text(`Desviasión4: ${this.data.dataResults.deviationQuarter}`)
        doc.fontSize(10).text(`g2: ${this.data.dataResults.g2}`)

        doc.pipe(fs.createWriteStream(this.path))

        await doc.end()
    }
}

module.exports = createPdfHandler