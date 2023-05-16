import { useEffect, useState, useRef } from "react"

import {GraficFrequency} from './GraficFrequency'
import { GraficOjiva } from "./GraficOjiva"
import { SendButtom } from "../SendButtom"
import { SendButtomPdf } from "../sendButtomPdf"

export const ShowResultsFrequency = ({nDates, xKOne, xKTwo, listNUmberTable, xMin, dataResults}) => {

    const getDataSend = useRef(null)
    const [sendDataExl, setSendDataExl] = useState({})
    const [listRows, seListRows] = useState([])
    
    let listRowsfi = []
    let listRowsFi = []
    let listMarca = []
    let listInI = []
    let listInIn =[]
    let listFr = []
    let listRowsfr = []
    let sumsRows = 0
    let sumINterval = xMin

    useEffect(()=> {
        let rows = []
        if (xKOne > 0) {
            for (let j = 0; j < Math.round(xKOne); j++) {
                rows.push(j)
                seListRows(rows)
            }
        }
        setSendDataExl({
            nRows: listRows.length,
            rowsIn: listNUmberTable,
            rowsK: listRows,
            rowsLi: listInI,
            rowsLs: listInIn,
            marca: listMarca,
            rowsfi: listRowsfi, 
            rowsfr: listRowsfr,
            rowsFi: listRowsFi, 
            rowsFrPr: listFr, 
            dataResults: dataResults
        })
    }, [listNUmberTable])

    return(
        <div className="results-table-frequency-container">
            <div className="results-table-frequency-sections">
                <div className="results-table-frequency-seciton-top">
                    <div className="section-top-k">
                        K
                    </div>
                    <div className="section-top-marca">
                        Intervalo
                    </div>
                    <div className="section-top-interval">
                        Marca
                    </div>
                    <div className="section-top-fi">
                        fi
                    </div>
                    <div className="section-top-fr">
                        fr
                    </div>
                    <div className="section-top-Fi">
                        Fi
                    </div>
                    <div className="section-top-Fr%">
                        Fr%
                    </div>
                </div>
                <div ref={getDataSend} className="results-table-frequency-seciton-mid">
                    <div className="section-mid-k">
                        {
                            listRows.map(r => {
                                return <div key={r}>{r+1}</div>
                            })
                        }
                    </div>
                    <div className="section-mid-marca">
                        {
                            listRows.map(r => {
                                listInI.push(sumINterval)
                                listMarca.push(sumINterval + Math.round(xKTwo) / 2)
                                sumINterval = sumINterval + Math.round(xKTwo)
                                listInIn.push(sumINterval)   
                                return <div key={r}>{
                                    `${sumINterval-Math.round(xKTwo)}-${sumINterval}`
                                }</div>
                            })
                        }
                    </div>
                    <div className="section-mid-interval">
                        {
                            listRows.map(r => {
                                return <div key={r}>{
                                    listMarca[r]
                                }</div>
                            })
                        }
                    </div>
                    <div className="section-mid-fi">
                        {
                            listRows.map(r => {
                                const numInterval = listNUmberTable.filter(n => n >= listInI[r] && n < listInIn[r])
                                listRowsfi.push(numInterval.length)
                                return <div key={r}>{
                                    numInterval.length
                                }</div>
                            })
                        }
                    </div>
                    <div className="section-mid-fr">
                        {
                          listRows.map(r =>{
                            listRowsfr.push(((listRowsfi[r]*100)/ nDates).toFixed(1))
                            return <div key={r}>{
                                ((listRowsfi[r]*100)/ nDates).toFixed(1) 
                            }</div>
                          })  
                        }
                    </div>
                    <div className="section-mid-Fi">
                        {
                            listRows.map(r => {
                                sumsRows = sumsRows + listRowsfi[r]
                                listRowsFi.push(sumsRows)
                                return <div key={r}>{sumsRows}</div>
                            })
                        }
                    </div>
                    <div className="section-mid-Fr%">
                        {
                            listRows.map(r => {
                                listFr.push(((listRowsFi[r]*100) / nDates).toFixed(1))
                                return <div key={r}>{
                                    ((listRowsFi[r]*100) / nDates).toFixed(1)    
                                }</div>
                            })
                        }
                    </div>
                </div>
                <div className="send-tables-btns-container">
                    <SendButtom
                        data={sendDataExl}
                        path={"tablefrequency"}
                    />
                    <SendButtomPdf
                        data={sendDataExl}
                        path={"tablefrequency"}
                    />
                </div>
            </div>
            <GraficFrequency
                listNUmberTable={listNUmberTable}
                listMarca={listMarca}
                listRowsfi={listRowsfi}
            />
            <GraficOjiva
                listRows={listRows}
                listFr={listFr}
            />
        </div>
    )
} 