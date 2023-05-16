import { useState } from "react"

import { HeaderTables } from "../Components/HeaderTables"
import { TableDatesGroupedMoD } from "../Components/Measures-of-dispersion/TableDatesGroupedMoD"
import { ShowResultsDGMoD } from "../Components/Measures-of-dispersion/ShowResultsDGMoD"

export const DatesGroupedMoF = () => {

    const [numRows, setNumRows] = useState(0)
    const [xTested, setxTested] = useState(0)
    const [variance, setVariance] = useState(0)
    const [standardDeviation, setStandardDeviation] = useState(0)
    const [sendDataExl, setSendDataExl] = useState({})

    return(
        <div className="main-mod-dates-grouped">
            <HeaderTables
                title={"Medidas de dispersión"}
                subtitle={"Datos agrupados"}
                setNumRows={setNumRows}
            />
            <TableDatesGroupedMoD
                numRows={numRows}
                setxTested={setxTested}
                setVariance={setVariance}
                setStandardDeviation={setStandardDeviation}
                setSendDataExl={setSendDataExl}
            />
            <ShowResultsDGMoD
                xTested={xTested}
                variance={variance}
                standardDeviation={standardDeviation}
                setSendDataExl={setSendDataExl}
                sendDataExl={sendDataExl}
            />
        </div>
    )
}