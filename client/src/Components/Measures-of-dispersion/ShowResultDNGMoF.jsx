import { useEffect } from "react"

import { SendButtom } from "../SendButtom"
import { SendButtomPdf } from "../sendButtomPdf"

export const ShowResultDNGMoF = ({xTested, variance, standardDeviation, sendDataExl, setSendDataExl}) => {

    useEffect(() => {

        const dataResults = {
            dataResults: {
                xtested: xTested,
                variance: variance,
                standardDeviation: standardDeviation
            }
        }

        setSendDataExl(Object.assign(sendDataExl, dataResults))
    }, [xTested])

    return(
        <div className="table-results-dng-mof-container">
            <div className="table-results-dng-mof-sections">
                <div className="x-tested-dng-mof">
                    <span>{`x̄: ${xTested}`}</span>
                </div>
                <div className="variance-dng-mof">
                    <span>{`Varianza: ${variance}`}</span>
                </div>
                <div className="standard-deviation-dng-mof">
                    <span>{`Desviasión: ${standardDeviation}`}</span>
                </div>
                <div className="send-tables-btns-container">
                    <SendButtom
                        path={"measures-of-dispersion-dates-not-grouped"}
                        data={sendDataExl}
                    />
                    <SendButtomPdf
                        path={"measures-of-dispersion-dates-not-grouped"}
                        data={sendDataExl}
                    />
                </div>
            </div>
        </div>
    )
}