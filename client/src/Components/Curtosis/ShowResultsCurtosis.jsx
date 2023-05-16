import { useEffect } from "react"

import { SendButtom } from "../SendButtom"
import { SendButtomPdf } from "../sendButtomPdf"

export const ShowResultsCurtosis = ({xTested, variance, deviation, deviationQuarter, g2, setSendDataExl, sendDataExl}) => {
    
    useEffect(()=>{

        const dataResults ={
            dataResults: {
                xTested: xTested,
                variance: variance,
                deviation: deviation,
                deviationQuarter: deviationQuarter,
                g2: g2
            }
        }

        setSendDataExl(Object.assign(sendDataExl, dataResults))

    }, [xTested])

    return(
        <div className="table-show-results-curtosis">
            <div className="table-show-results-sections-curtosis">
                <div className="section-xtested-curtosis">
                    <span>{`x̄: ${xTested}`}</span>
                </div>
                <div className="section-variance-curtosis">
                    <span>{`Varianza: ${variance}`}</span>
                </div>
                <div className="section-deviation-curtosis">
                    <span>{`Desviación: ${deviation}`}</span>
                </div>
                <div className="section-deviationquarter-curtosis">
                    <span>{`Desviación⁴: ${deviationQuarter}`}</span>
                </div>
                <div className="section-g2-curtosis">
                    <span>{`g2: ${g2}`}</span>
                </div>
                <div className="send-tables-btns-container">
                    <SendButtom
                        path={"curtosis"}
                        data={sendDataExl}
                    />
                    <SendButtomPdf
                        path={"curtosis"}
                        data={sendDataExl}
                    />
                </div>
            </div>
        </div>
    )
}