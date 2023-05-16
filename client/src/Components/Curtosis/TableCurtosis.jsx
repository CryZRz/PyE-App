import { useState, useEffect, useRef } from "react"

export const TableCurtosis = ({numRows, setxTested, setVariance, setDeviation, setDeviationQuarter, setG2, setSendDataExl}) => {

    const listX = useRef(null)
    const listx_x = useRef(null)
    const listx_xSquared = useRef(null)
    const listx_xQuarter = useRef(null) 

    const [listRows, setListRows] = useState([])

    useEffect(()=> {
        let rows = []
        if (numRows == "") {
            setListRows([])
        }else{
            for (let j = 0; j < numRows; j++) {
                rows.push(j)
            }
            setListRows(rows)
        }
    }, [numRows])

    function createDataSendExl() {
        let listSetNumbersRows = [[], [], [], []]
        let listGetNumbersRows = [listX, listx_x, listx_xSquared, listx_xQuarter]

        for (let i = 0; i < listSetNumbersRows.length; i++) {
            i == 0 ? Array.from(listGetNumbersRows[i].current.childNodes).map(r => {
                listSetNumbersRows[i].push(Number(r.value))
            }):
            Array.from(listGetNumbersRows[i].current.childNodes).map(r => {
                listSetNumbersRows[i].push(Number(r.textContent))
            })
        }

        setSendDataExl({
            nRows: listRows.length,
            rowsX: listSetNumbersRows[0],
            rowsx_xTested: listSetNumbersRows[1],
            rowsx_xTested2: listSetNumbersRows[2],
            rowsx_xTested4: listSetNumbersRows[3],
        })
    }

    function lisenChange(e){
        console.log(e.target.value)
        let sumX = 0
        let xTested = 0
        let sumx_xTestedSquared = 0
        let sumx_xTestedQuarte = 0
        for (let y = 0; y < numRows; y++) {
            let rowsX = Number(listX.current.children[y].value)
            sumX = sumX + rowsX
            xTested = sumX / numRows
        }
        for (let i = 0; i < numRows; i++) {
            let rowsX = Number(listX.current.children[i].value)
            let rowsx_xTested = listx_x.current.children[i]
            let rowsx_xTestedSquared = listx_xSquared.current.children[i]
            let rowsx_xTestedQuarter = listx_xQuarter.current.children[i]

            let valuex_xTested = rowsX - xTested
            rowsx_xTested.innerHTML = valuex_xTested.toFixed(2)

            let valuex_xTestedSquared = Math.pow(valuex_xTested,2).toFixed(2)
            sumx_xTestedSquared = sumx_xTestedSquared + Number(valuex_xTestedSquared)
            rowsx_xTestedSquared.innerHTML = valuex_xTestedSquared

            let valuex_xTestedQuarter = Math.pow(valuex_xTestedSquared,2)
            sumx_xTestedQuarte = sumx_xTestedQuarte + Number(valuex_xTestedQuarter)
            rowsx_xTestedQuarter.innerHTML = valuex_xTestedQuarter.toFixed(3)
        }
        setxTested(xTested)
        let variance = sumx_xTestedSquared / numRows
        setVariance(variance)
        let deviation = Math.sqrt(variance)
        setDeviation(deviation)
        let diaviationQuarter = Math.pow(deviation,4)
        setDeviationQuarter(diaviationQuarter)
        let g2 = sumx_xTestedQuarte / (numRows * diaviationQuarter)  
        setG2(g2)

        createDataSendExl()
    }

    return(
        <div className="table-curtosis-container">
            <div className="table-curtosis-sections">
                <div className="table-curtosis-section-rows-top">
                    <div className="section-x">x</div>
                    <div className="section-x-xtested">x-x̄</div>
                    <div className="section-x-xtested-squared">x-x̄²</div>
                    <div className="section-x-xtested-quarter">x-x̄⁴</div>
                </div>
                <div className="table-curtosis-section-rows-mid">
                    <div ref={listX} className="rows-x">
                        {
                            listRows.map(r => {
                                return  <input
                                            onChange={lisenChange} 
                                            key={r} 
                                            type="number" ></input>
                            })
                        }
                    </div>
                    <div ref={listx_x} className="rowsx-xtested">
                        {
                            listRows.map(r => {
                                return  <div key ={r}></div>
                            })
                        }
                    </div>
                    <div ref={listx_xSquared} className="rows-x-xtested-squared">
                        {
                            listRows.map(r => {
                                return  <div key ={r}></div>
                            })
                        }
                    </div>
                    <div ref={listx_xQuarter} className="rows-x-xtested-quarter">
                        {
                            listRows.map(r => {
                                return  <div key ={r}></div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}