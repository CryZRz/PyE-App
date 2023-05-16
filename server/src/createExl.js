const path = require("path")
const xl = require("excel4node");

class createExlHandler {
  constructor(filename, data) {
    this.wb = new xl.Workbook();
    this.filename = this.wb.addWorksheet(filename);
    this.style = this.wb.createStyle({
      font: {
        color: "#000000",
        size: 12,
      }
    })
    this.styleResults = this.wb.createStyle({
      font: {
        color: "#000000",
        size: 16,
      }
    })
    this.data = data
    this.path = path.join(__dirname,'excelArchives',`${filename}.xlsx`)
  }

  weitenDates(params){
    for (let i = 0; i < this.data.rowsIn.length; i++) {
      let changeToNum = Number(params[i])
      this.filename.cell(2,i+4).number(changeToNum).style(this.style)
      
    }
  }

  writeHeader(row, param, columns){
    for (let i = 0; i < columns; i++) {
      this.filename.cell(row,i+4).string(param[i]).style(this.style)
    }
  }

  writeRows(column, param){
    for (let i = 0; i < this.data.nRows; i++) {
      let changeToNum = Number(param[i])
      this.filename.cell(i+6,column).number(changeToNum).style(this.style)
    }
  }

  writeResults(paramOne, paramTwo, iter, rows, before, length){
    let iterator = iter
    for (let i = 0; i < rows; i++) {
      console.log(length+iterator+before)
      let changeToNum = Number(paramTwo[i])
      this.filename.cell(length+iterator+before, 4).string(paramOne[i]).style(this.styleResults)
      this.filename.cell(length+iterator+before, 5).number(changeToNum).style(this.style)
      iterator += 1
    }
  }

  writeFileTableFrequency(){

    this.writeHeader(5,["K", "Li", "Ls", "Marca", "fi", "fr", "Fi", "Fi%"],8)
    this.writeRows(4,this.data.rowsK)
    this.writeRows(5,this.data.rowsLi)
    this.writeRows(6,this.data.rowsLs)
    this.writeRows(7,this.data.marca)
    this.writeRows(8,this.data.rowsfi)
    this.writeRows(9,this.data.rowsfr)
    this.writeRows(10,this.data.rowsFi)
    this.writeRows(11,this.data.rowsFrPr)
    this.writeResults(
      ["Numero de datos", "Min", "Max", "Rango", "K1", "K2"],
      [
        this.data.dataResults.nDates, 
        this.data.dataResults.xMin, 
        this.data.dataResults.xMax,
        this.data.dataResults.range,
        this.data.dataResults.xKOne,
        this.data.dataResults.xKTwo
      ], 3, 6, 6, this.data.rowsK.length
      ) 
      this.weitenDates(this.data.rowsIn)

    return new Promise((res, rej) => {
      this.wb.write(this.path, (err, stas) => {
        if (err) {
          rej(err)
        }else{
          console.log("created xlxs")
          res(stas)
        }
      })
    })
  }

  writeFileTableSecMomtDtNotGrpd(){
    this.weitenDates(this.data.rowsIn)
    this.writeResults(
      ["Numero de datos", "Media aritmetica", "Rango medio", "Posición"],
      [
        this.data.dataResults.nDates, 
        this.data.dataResults.AritAv, 
        this.data.dataResults.MiddRan,
        this.data.dataResults.position,
      ], 2, 4, 2, 2
      )

    return new Promise((res, rej) => {
      this.wb.write(this.path, (err, stas) => {
        if (err) {
          rej(err)
        }else{
          console.log("created xlxs")
          res(stas)
        }
      })
    })
  }

  writeFileTableSecMomtDtGrpd(){
    this.writeHeader(5,["Li", "Ls", "X", "f", "xf", "F"],6)

    this.writeRows(4,this.data.rowsLi)
    this.writeRows(5,this.data.rowsLs)
    this.writeRows(6,this.data.rowsX)
    this.writeRows(7,this.data.rowsf)
    this.writeRows(8,this.data.rowsxf)
    this.writeRows(9,this.data.rowsxF)

    this.writeResults(
      ["Numero de datos", "Moda", "Mediana"],
      [
        this.data.nRows, 
        this.data.dataResults.fashion, 
        this.data.dataResults.median
      ], 4, 3, 4, this.data.nRows
      )

    return new Promise((res, rej) => {
      this.wb.write(this.path, (err, stas) => {
        if (err) {
          rej(err)
        }else{
          console.log("created xlxs")
          res(stas)
        }
      })
    })
  }

  writeFileTableMoFDtNotGrpd(){
    this.weitenDates(this.data.rowsIn)
    this.writeResults(
      ["Numero de datos", "x̄", "Varianza", "Desviasión"],
      [
        this.data.nRows, 
        this.data.dataResults.xtested, 
        this.data.dataResults.variance,
        this.data.dataResults.standardDeviation,
      ], 2, 4, 2, 2
      )

      return new Promise((res, rej) => {
        this.wb.write(this.path, (err, stas) => {
          if (err) {
            rej(err)
          }else{
            console.log("created xlxs")
            res(stas)
          }
        })
      })
  }

  writeFileTableMoFDtGrpd(){
    this.writeHeader(5,["Li", "Ls", "X", "f", "xf", "x-x̄", "x-x̄2", "x-x̄2f" ],8)

    this.writeRows(4,this.data.rowsLi)
    this.writeRows(5,this.data.rowsLs)
    this.writeRows(6,this.data.rowsX)
    this.writeRows(7,this.data.rowsf)
    this.writeRows(8,this.data.rowsxf)
    this.writeRows(9,this.data.rowsx_x)
    this.writeRows(10,this.data.rowsx_x2)
    this.writeRows(11,this.data.rowsx_x2f)
    
    this.writeResults(
      ["Numero de datos", "x̄", "Varianza", "Desviasión Estandar"],
      [
        this.data.nRows, 
        this.data.dataResults.xTested, 
        this.data.dataResults.variance,
        this.data.dataResults.standardDeviation,
      ], 5, 4, 4, this.data.nRows
      )

      return new Promise((res, rej) => {
        this.wb.write(this.path, (err, stas) => {
          if (err) {
            rej(err)
          }else{
            console.log("created xlxs")
            res(stas)
          }
        })
      })
  }

  writeFileCurtosis(){
    this.writeHeader(5,["X", "x-x̄", "x-x̄²", "x-x̄⁴"],4)

    this.writeRows(4,this.data.rowsX)
    this.writeRows(5,this.data.rowsx_xTested)
    this.writeRows(6,this.data.rowsx_xTested2)
    this.writeRows(7,this.data.rowsx_xTested4)

    this.writeResults(
      ["Numero de datos", "x̄", "Varianza", "Desviasión", "Desviasión⁴", "g2"],
      [
        this.data.nRows, 
        this.data.dataResults.xTested, 
        this.data.dataResults.variance,
        this.data.dataResults.deviation,
        this.data.dataResults.deviationQuarter,
        this.data.dataResults.g2,

      ], 5, 6, 4, this.data.nRows
      )

      return new Promise((res, rej) => {
        this.wb.write(this.path, (err, stas) => {
          if (err) {
            rej(err)
          }else{
            console.log("created xlxs")
            res(stas)
          }
        })
      })
  }

}


module.exports = createExlHandler