import { useEffect, useState, useRef } from "react"

export const TableDatesNotGroupedMoF = ({numRows, setVariance, setStandardDeviation, setxTested, setSendDataExl}) => {

    const ListNumbersRows = useRef(null)
    const [listNumbers, setListNumbers] = useState([])

    useEffect(()=>{
        let listRows = []
        if(numRows == ""){
            setListNumbers([])
        }else{
            for (let i = 0; i < numRows; i++) {
                listRows.push(i)
            }
            setListNumbers(listRows)
        }
    }, [numRows])

    function createDataSendExl() {
        let listRowsGetDates = []
        Array.from(ListNumbersRows.current.childNodes).map(r => {
            listRowsGetDates.push(r.value)
        })
        setSendDataExl({
            nRows: listNumbers.length,
            rowsIn:listRowsGetDates
        })
    }

    function lisenChange(e){
        console.log(e.target.value)
        let sumNumbersRows = 0
        let xTested = 0
        let sumValuesAbsolutes = 0
        let sumValuesPow = 0
        for (let y = 0; y < numRows; y++) {
            let row =  Number(ListNumbersRows.current.children[y].value)
            sumNumbersRows = sumNumbersRows + row
            xTested = sumNumbersRows / numRows
            setxTested(xTested)

        }
        for (let j = 0; j < numRows; j++) {
            let row =  Number(ListNumbersRows.current.children[j].value)
            let resValueAbsolute = row - xTested
            sumValuesAbsolutes = sumValuesAbsolutes + Number(resValueAbsolute.toFixed(2))
            let valuePow = Math.pow(resValueAbsolute,2)
            sumValuesPow = sumValuesPow + valuePow
            let varience = sumValuesPow / numRows
            setVariance(varience)
            let calcStandardDeviation = Math.sqrt(varience)
            setStandardDeviation(calcStandardDeviation)
        }
        createDataSendExl()
    }

    return(
        <div className="table-dates-not-grouped-mof-container">
            <div className="table-dates-not-grouped-mof-sections">
                <div ref={ListNumbersRows} className="section-rows-dates-not-grouped-mof">
                    {
                        listNumbers.map(r => {
                            return <input 
                                key={r}
                                onChange={lisenChange}
                                type="number"></input>
                        })
                    }
                </div>
            </div>
        </div>
    )
}