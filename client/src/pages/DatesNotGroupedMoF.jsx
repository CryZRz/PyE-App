import { useState } from "react"

import { HeaderTables } from "../Components/HeaderTables"
import { TableDatesNotGroupedMoF } from "../Components/Measures-of-dispersion/TableDatesNotGroupedMoF"
import { ShowResultDNGMoF } from "../Components/Measures-of-dispersion/ShowResultDNGMoF"

export const DatesNotGroupedMoF = () => {

    const [xTested ,setxTested] = useState(0)
    const [numRows, setNumRows] = useState(0)
    const [variance, setVariance] = useState(0)
    const [standardDeviation, setStandardDeviation] = useState(0)
    const [sendDataExl, setSendDataExl] = useState({})

    return(
        <div className="main-mod-dates-not-grouped">
            <HeaderTables
                title={"Medidas de dispersión"}
                subtitle={"Datos no agrupados"}
                setNumRows={setNumRows}
            />
            <TableDatesNotGroupedMoF
                numRows={numRows}
                setVariance={setVariance}
                setStandardDeviation={setStandardDeviation}
                setxTested={setxTested}
                setSendDataExl={setSendDataExl}
            />
            <ShowResultDNGMoF
                variance={variance}
                standardDeviation={standardDeviation}
                xTested={xTested}
                setSendDataExl={setSendDataExl}
                sendDataExl={sendDataExl}
            />
        </div>
    )
}