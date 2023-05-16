import { useEffect, useState, useRef } from "react"

export const TablaFrecuency = ({numberRows, numberColumns, setNDates, setVMin, setVMax, setRange, setKOne, setKTwo, setListNUmbersTable}) => {
    
    const rowsTable = useRef(null)

    const [listRows, setListRows] = useState([])
    
    useEffect(() => {
        let rows = []
        if (numberRows == "" || numberColumns == "") {
            setListRows([])
        }else{
            for (let y = 0; y < numberRows*numberColumns; y++) {
                rows.push(y)
                setListRows(rows)
            }
        }
    }, [numberRows, numberColumns])

    
    function lisenChange(e) {
        let numsTable = []

        let numNDates = numberRows*numberColumns
        setNDates(numNDates)

        let getNums = Array.from(rowsTable.current.children)
        getNums.map(n => {
            numsTable.push(Number(n.value))
        })
        
        let numMin = Math.min(...numsTable)
        setVMin(numMin)

        let numMax = Math.max(...numsTable)
        setVMax(numMax)

        let numRange = numMax - numMin
        setRange(numRange)

        let numKOne = 1 + 3.332 * Math.log10(numNDates)
        setKOne(numKOne)

        let numKTwo = numRange / Math.round(numKOne)
        setKTwo(numKTwo)

        setListNUmbersTable(numsTable)
    }

    return(
        <div className="table-get-dates-container">
            <div ref={rowsTable} className="table-get-dates-inputs">
                {
                    listRows.map(r => {
                        return <input
                                    key={r}
                                    className="get-dates-frequency"
                                    type="number"
                                    onChange={lisenChange}
                                    >
                                </input>
                    })
                }
            </div>
        </div>
    )
}