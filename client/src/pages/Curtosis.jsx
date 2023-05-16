import { useState } from 'react'

import { HeaderTables } from "../Components/HeaderTables"
import { TableCurtosis } from '../Components/Curtosis/TableCurtosis'
import { ShowResultsCurtosis } from '../Components/Curtosis/ShowResultsCurtosis'

export const Curtosis = () => {

    const [numRows, setNumRows] = useState(0)
    const [xTested, setxTested] = useState(0) 
    const [variance, setVariance] = useState(0) 
    const [deviation, setDeviation] = useState(0) 
    const [deviationQuarter, setDeviationQuarter] = useState(0) 
    const [g2, setG2] = useState(0)
    const [sendDataExl, setSendDataExl] = useState({})

    return(
        <div className="main-curtosis">
            <HeaderTables
                title={"Curtosis"}
                subtitle={":)"}
                setNumRows={setNumRows}
            />
            <TableCurtosis
                numRows={numRows}
                setxTested={setxTested}
                setVariance={setVariance}
                setDeviation={setDeviation}
                setDeviationQuarter={setDeviationQuarter}
                setG2={setG2}
                setSendDataExl={setSendDataExl}
            />
            <ShowResultsCurtosis
                xTested={xTested}
                variance={variance}
                deviation={deviation}
                deviationQuarter={deviationQuarter}
                g2={g2}
                setSendDataExl={setSendDataExl}
                sendDataExl={sendDataExl}
            />
        </div>
    )
}