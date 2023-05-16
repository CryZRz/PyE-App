import { useEffect } from "react"

import { SendButtom } from "../SendButtom"
import { SendButtomPdf } from "../sendButtomPdf"

export const ShowResultsDatesGrouped = ({fashion, median, setSendDataExl, sendDataExl}) => {

    useEffect(()=>{
        const dataResults = {
            dataResults: {
                fashion: fashion,
                median: median
            }
        }
        setSendDataExl(Object.assign(sendDataExl, dataResults))
    },[sendDataExl])

    return(
        <div className="show-results-sm-dg-container">
            <div className="show-results-sm-dg-sections">
                <div className="result-fashion-sm-dg-section">
                    <span>{`Moda: ${fashion}`}</span>
                </div>
                <div className="result-median-sm-dg-section">
                    <span>{`Mediana ${median}`}</span>
                </div>
                <div className="send-tables-btns-container">
                    <SendButtom
                        path={"second-moment-dates-grouped"}
                        data={sendDataExl}
                    />
                    <SendButtomPdf
                        path={"second-moment-dates-grouped"}
                        data={sendDataExl}
                    />
                </div>
            </div>
        </div>
    )
}