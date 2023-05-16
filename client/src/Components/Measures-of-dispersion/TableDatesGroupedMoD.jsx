import { useEffect, useState, useRef } from "react"

export const TableDatesGroupedMoD = ({numRows, setxTested, setVariance, setStandardDeviation, setSendDataExl}) => {

    const numbersLi = useRef(null)
    const numbersLs = useRef(null)
    const numbersX = useRef(null)
    const numbersf = useRef(null)
    const numbersxf = useRef(null)
    const numbersx_xTested = useRef(null)
    const numbersx_xTestedSquared = useRef(null)
    const numbersx_xTestedSquaredf = useRef(null)

    const [listRows, setListRows] = useState([])

    useEffect(() => {
        let rows = []
        if (numRows == "") {
            setListRows([])
        }else{
            for (let y = 0; y < numRows; y++) {
                rows.push(y)
            }
            setListRows(rows)
        }
    }, [numRows])

    function createDatesSendExl() {
        let setListDatesRows = [[], [], [], [], [], [], [], []]
        let listGetRowsDates = [
            numbersLi, numbersLs, 
            numbersf, numbersX, 
            numbersxf, numbersx_xTested,
            numbersx_xTestedSquared, numbersx_xTestedSquaredf
        ]
        for (let i = 0; i < listGetRowsDates.length; i++) {
            i <=2 ? Array.from(listGetRowsDates[i].current.childNodes).map(r =>{
                setListDatesRows[i].push(Number(r.value))
            }):
            Array.from(listGetRowsDates[i].current.childNodes).map(r =>{
                setListDatesRows[i].push(Number(r.textContent))
            })
        }
        setSendDataExl({
            nRows: listRows.length,
            rowsLi: setListDatesRows[0],
            rowsLs: setListDatesRows[1],
            rowsX: setListDatesRows[3],
            rowsf: setListDatesRows[2],
            rowsxf: setListDatesRows[4],
            rowsx_x: setListDatesRows[5],
            rowsx_x2: setListDatesRows[6],
            rowsx_x2f: setListDatesRows[7],

        })

    }

    function lisenChange(e){
        let sumxF = 0
        let sumf = 0
        let valuexTested  = 0
        let sumx_xTestedSquaredf = 0
        for (let i = 0; i < numRows; i++) {
            let getNumLi = Number(numbersLi.current.children[i].value)
            let getNumLs = Number(numbersLs.current.children[i].value)
            let getNumX = numbersX.current.children[i]
            let getNumf = Number(numbersf.current.children[i].value)
            let getNumxf = numbersxf.current.children[i]

            let valueX =  (getNumLi + getNumLs) / 2 
            getNumX.innerHTML = valueX

            let valuexF = Number(getNumX.textContent) * getNumf
            sumxF = sumxF + valuexF
            sumf = sumf + getNumf
            getNumxf.innerHTML = valuexF
            valuexTested = sumxF / sumf
            
        }
        for (let j = 0; j < numRows; j++) {
            let getNumf = Number(numbersf.current.children[j].value)
            let getNumX = numbersX.current.children[j]
            let getNumx_xTested = numbersx_xTested.current.children[j]
            let getNumx_xTestedSquared = numbersx_xTestedSquared.current.children[j]
            let getNumx_xTestedSquaredf = numbersx_xTestedSquaredf.current.children[j]

            let valuex_xTested = Math.round(Number(getNumX.textContent) - valuexTested, 2)
            getNumx_xTested.innerHTML = valuex_xTested

            let valuex_xTestedSquared = Math.pow(valuex_xTested,2)
            getNumx_xTestedSquared.innerHTML = valuex_xTestedSquared

            let valuex_xTestedSquaredf = getNumf * valuex_xTestedSquared
            sumx_xTestedSquaredf = sumx_xTestedSquaredf + valuex_xTestedSquaredf
            getNumx_xTestedSquaredf.innerHTML = valuex_xTestedSquaredf
        }
        setxTested(valuexTested)
        let valueVariance = sumx_xTestedSquaredf / sumf
        setVariance(valueVariance)
        let valueStandardDeviation = Math.sqrt(valueVariance)
        setStandardDeviation(valueStandardDeviation)
       
        createDatesSendExl()
    }

    return(
        <div className="table-sm-dtg-container">
        <div className="table-sm-sections">
            <div className="sections-top-table-sm-dg mof">
                <div className="section-li-top-table-sm-dg">Li</div>
                <div className="section-ls-top-table-sm-dg">Ls</div>
                <div className="section-x-top-table-sm-dg">x</div>
                <div className="section-f-top-table-sm-dg">f</div>
                <div className="section-xf-top-table-sm-dg">xf</div>
                <div className="section-F-top-table-sm-dg">x-x̄</div>
                <div className="section-F-top-table-sm-dg">x-x̄²</div>
                <div className="section-F-top-table-sm-dg">x-x̄²f</div>
            </div>
            <div className="sections-mid-table-mof-dg">
                <div ref={numbersLi} className="section-li-mid-table-sm-dg">
                    {
                        listRows.map(r => {
                            return <input key={r} type="number" onChange={lisenChange}></input>
                        })
                    }
                </div>
                <div ref={numbersLs} className="section-ls-mid-table-sm-dg">
                    {
                        listRows.map(r => {
                            return <input onChange={lisenChange} key={r} type="number"></input>
                        })
                    }
                </div>
                <div ref={numbersX} className="section-x-mid-table-sm-dg">
                    {
                        listRows.map(r => {
                            return <div key={r}></div>
                        })
                    }
                </div>
                <div ref={numbersf} className="section-f-mid-table-sm-dg">
                    {
                        listRows.map(r => {
                            return <input onChange={lisenChange} key={r} type="number"></input>
                        })
                    }
                </div>
                <div ref={numbersxf} className="section-xf-mid-table-sm-dg">
                    {
                        listRows.map(r => {
                            return <div key={r}></div>
                        })
                    }
                </div>
                <div ref={numbersx_xTested} className="section-F-mid-table-sm-dg">
                    {
                        listRows.map(r => {
                            return <div key={r}></div>
                        })
                    }
                </div>
                <div ref={numbersx_xTestedSquared} className="section-F-mid-table-sm-dg">
                    {
                        listRows.map(r => {
                            return <div key={r}></div>
                        })
                    }
                </div>
                <div ref={numbersx_xTestedSquaredf} className="section-F-mid-table-sm-dg">
                    {
                        listRows.map(r => {
                            return <div key={r}></div>
                        })
                    }
                </div>
            </div>
        </div>
        {
            console.log(listRows)
        }
    </div>
    )
}