import { useState, useEffect } from "react"

import { HeaderTableFrequency } from "../Components/Table-frequency/HeaderTableFrequency"
import { TablaFrecuency } from "../Components/Table-frequency/TableFrequency"
import { ShowDatesTableFrequency } from "../Components/Table-frequency/ShowDatesTableFrenquency"
import { ShowResultsFrequency } from "../Components/Table-frequency/ShowResultsFrequency"

export const TableFrequency = () => {

    const [numberRows, setNumberRows] = useState(0)
    const [numberColumns, setNumberColumns] = useState(0)
    const [listNUmberTable, setListNUmbersTable] = useState([])
    
    const [nDates, setNDates] = useState(0)
    const [xMin, setVMin] = useState(0)
    const [xMax, setVMax] = useState(0)
    const [range, setRange] = useState(0)
    const [xKOne, setKOne] = useState(0)
    const [xKTwo, setKTwo] = useState(0)
    const [dataResults, setDataResults] = useState({})

    useEffect(() => {

        const dataRes = {           
            nDates: nDates,
            xMin: xMin,
            xMax: xMax,
            range: range,
            xKOne: xKOne,
            xKTwo: xKTwo
        }

        setDataResults(Object.assign(dataResults,dataRes))

    }, [xKTwo])


    return(
        <div className="main-table-frequency">
            <HeaderTableFrequency
                setNumberRows={setNumberRows}
                setNumberColumns={setNumberColumns}
            />
            <TablaFrecuency
                numberRows={numberRows}
                numberColumns={numberColumns}
                setNDates={setNDates}
                setVMin={setVMin}
                setVMax={setVMax}
                setRange={setRange}
                setKOne={setKOne}
                setKTwo={setKTwo}
                setListNUmbersTable={setListNUmbersTable}
            />
            <ShowDatesTableFrequency
                nDates={nDates}
                xMin={xMin}
                xMax={xMax}
                range={range}
                xKOne={xKOne}
                xKTwo={xKTwo}
            />
            <ShowResultsFrequency
                xKOne={xKOne}
                xKTwo={xKTwo}
                xMin={xMin}
                nDates={nDates}
                listNUmberTable={listNUmberTable}
                dataResults={dataResults}
            />
        </div>
    )
}