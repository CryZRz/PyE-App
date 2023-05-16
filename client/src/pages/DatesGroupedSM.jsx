import { useState } from "react"

import { HeaderTables } from "../Components/HeaderTables"
import { TableDatesGrouped } from "../Components/Second-moment/TableDatesGrouped"
import { ShowResultsDatesGrouped } from "../Components/Second-moment/ShowResultsDA"

export function DatesGroupedSM(){

    const [numRows, setNumRows] = useState(0)
    const [medianResult, setMedianResult] = useState("")
    const [fashionResult, setFashionResult] = useState("")
    const [sendDataExl, setSendDataExl] = useState({})

    return(
        <div className="Main-sm-dtg">
            <HeaderTables
                title={"Segundo Momento"} 
                subtitle={"Datos agrupados"}
                setNumRows={setNumRows}
            />
            <TableDatesGrouped
                numRows={numRows}
                setMedianResult={setMedianResult}
                setFashionResult={setFashionResult}
                setSendDataExl={setSendDataExl}
            />
            <ShowResultsDatesGrouped
                fashion={fashionResult}
                median={medianResult}
                setSendDataExl={setSendDataExl}
                sendDataExl={sendDataExl}
            />
        </div>
    )
}