import { useEffect } from "react"

import { SendButtom } from "../SendButtom"
import { SendButtomPdf } from "../sendButtomPdf"

export const ShowResultsDGMoD = ({xTested, variance, standardDeviation, sendDataExl, setSendDataExl}) => {

    useEffect(()=>{

        const dataResults = {
            dataResults:{
                xTested: xTested,
                variance: variance,
                standardDeviation: standardDeviation
            }
        }

        setSendDataExl(Object.assign(sendDataExl,dataResults))
    },[xTested])

    return(
        <div className="table-results-dg-mod-container">
            <div className="table-results-dg-mod-sections">
                <div className="section-xtested-dg-mod">
                    <span>{`x̄: ${xTested}`}</span>
                </div>
                <div className="section-variance-dg-mod">
                    <span>{`Varianza: ${variance}`}</span>
                </div>
                <div className="section-deviaton-standar-dg-mod">
                    <span>{`Desviasión: ${standardDeviation}`}</span>
                </div>
                <div className="send-tables-btns-container">
                    <SendButtom
                        path={"measures-of-dispersion-dates-grouped"}
                        data={sendDataExl}
                    />
                    <SendButtomPdf
                        path={"measures-of-dispersion-dates-grouped"}
                        data={sendDataExl}
                    />
                </div>
            </div>
        </div>
    )
}