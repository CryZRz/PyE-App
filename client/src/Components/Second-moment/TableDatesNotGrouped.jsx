import { useEffect, useState, useRef } from "react"

import { SendButtom } from "../SendButtom"
import { SendButtomPdf } from "../sendButtomPdf"

export const TableDates = ({numRows}) => {

    const [showAritAv, setShowAritAv] = useState(0)
    const [showMiddRan, setShowMiddRan] = useState(0)
    const [showPosition, setShowPosition] = useState(0)
    const contentRowTable = useRef(null)
    const [listRows, setListRows] = useState([])
    let [listNumbers, setListNumber] = useState([])

    useEffect(()=>{
        let rows = []
        let numbers = []
        if(numRows == ""){
            setListRows([])
            setShowAritAv(0)
            setShowMiddRan(0)
            setShowPosition(0)
        }else{
            for(let i=0; i < numRows; i++){
                rows.push(i)
                setListRows(rows)
                numbers.push(0)
                setListNumber(numbers)
            }
        }
    }, [numRows]) 

    function lisenChange(e){
        e.preventDefault()
        for (let i = 0; i < numRows; i++) {
            let rowDate = contentRowTable.current.children[i].value
            if(rowDate == ""){
                listNumbers[i] = 0
            }else{
                listNumbers[i] = parseInt(rowDate)
            }
        }
        resolveTable()
    }

    function resolveTable(){
        let sumTotal = 0
        listNumbers.map(n => {
            sumTotal = sumTotal + n
        })

        let arithmeticAverage = sumTotal / numRows
        setShowAritAv(arithmeticAverage)
        
        let maxValue = Math.max(...listNumbers)
        let minValue = Math.min(...listNumbers)
        
        let middleRange = (maxValue + minValue) / 2
        setShowMiddRan(middleRange)
        
        let position = (Number(numRows) + 1) / 2
        setShowPosition(position)
    }

    return(
        <div className="table-dates-container"> 
            <div className="table-dates" ref={contentRowTable}>
                {
                    listRows.map(r => {
                        return <input
                                key={r}
                                onChange={lisenChange} 
                                className="row-date" 
                                type="number">                                
                            </input>
                    })
                }
            </div>
            <div className="show-results-container">
                <div className="show-results">
                    <span className="arithmetic-average">
                        {`Media Aritmetica: ${showAritAv}`}
                    </span>
                    <span className="middle-range">
                        {`Rango Medio: ${showMiddRan}`}
                    </span>
                    <span className="position-result">
                        {`Posición: ${showPosition}`}
                    </span>
                    <div className="send-tables-btns-container">
                        <SendButtom
                            data={{
                                nRows: listRows.length,
                                rowsIn: listNumbers,
                                dataResults:{
                                    nDates: listRows.length,
                                    AritAv: showAritAv,
                                    MiddRan: showMiddRan,
                                    position: showPosition
                                }
                            }}
                            path={"second-moment-dates-not-grouped"}
                        />
                        <SendButtomPdf
                           data={{
                            nRows: listRows.length,
                            rowsIn: listNumbers,
                            dataResults:{
                                nDates: listRows.length,
                                AritAv: showAritAv,
                                MiddRan: showMiddRan,
                                position: showPosition
                            }
                        }}
                        path={"second-moment-dates-not-grouped"} 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}