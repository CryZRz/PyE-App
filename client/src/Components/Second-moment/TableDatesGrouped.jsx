import { useState, useEffect, useRef } from "react"

export const TableDatesGrouped = ({numRows, setMedianResult, setFashionResult, setSendDataExl}) => {

    const numbersLi = useRef(null)
    const numbersLs = useRef(null)
    const numbersX = useRef(null)
    const numbersf = useRef(null)
    const numbersxf = useRef(null)
    const numbersF = useRef(null)
    
    const [listRows, setListRows] = useState([])

    useEffect(() => {
        if(numRows == ""){
            setListRows([])
        }else{
            let rows = []
            for(let i = 0; i < numRows; i++){
                rows.push(i)
            }
            setListRows(rows)
        }
    }, [numRows])

    function createDataSend() {
        let listSectionsRows = [numbersLi, numbersLs, numbersf, numbersX, numbersxf, numbersF]
        let listRowsNums = [[], [], [], [], [], []]

        for (let i = 0; i < 3; i++) {
            Array.from(listSectionsRows[i].current.childNodes).map(r => {
                listRowsNums[i].push(r.value)
            })
        }
        
        for (let i = 3; i < 6; i++) {
            Array.from(listSectionsRows[i].current.childNodes).map(r => {
                listRowsNums[i].push(r.textContent)
            })
        }
        console.log(listRowsNums[4])
        setSendDataExl({
            nRows: listRows.length,
            rowsLi: listRowsNums[0],
            rowsLs: listRowsNums[1],
            rowsX:  listRowsNums[3],
            rowsf:  listRowsNums[2],
            rowsxf:  listRowsNums[4],
            rowsxF:  listRowsNums[5],
        })
    }

    function lisenChange(e){
        for (let i = 0; i < numRows; i++) {
            let getNumLi = Number(numbersLi.current.children[i].value)
            let getNumLs = Number(numbersLs.current.children[i].value)
            let getNumX = numbersX.current.children[i]
            let getNumf = Number(numbersf.current.children[i].value)
            let getNumxf = numbersxf.current.children[i]
            let getNumF = numbersF.current.children[i]

            let resultX  = (getNumLi + getNumLs) / 2
            getNumX.innerHTML = resultX

            let resultxf = getNumX.textContent * getNumf
            getNumxf.innerHTML = resultxf

            getNumF.innerHTML = getNumf
        }

        for (let j = 0; j < numRows; j++) {
            let numEachCal = numbersF.current.children[numRows-1].textContent / 2
            let getNumF = Number(numbersF.current.children[j].textContent)
            
            if (numbersF.current.children[j+1] != undefined) {
                let resultNumF = getNumF + Number(numbersF.current.children[j+1].textContent)
                numbersF.current.children[j+1].innerHTML = resultNumF
            }

            let listNumbersF = Array.from(numbersF.current.childNodes)
            const searchIndOp = (f) => f.textContent >= numEachCal
            let indexNumOp = listNumbersF.findIndex(searchIndOp)

            calculateMedian(indexNumOp,numEachCal)
        }

        function calculateMedian(index,nDates){
            let Li = Number(numbersLi.current.children[index].value)
            let Ls = Number(numbersLs.current.children[index].value)
            let FMoreOne = numbersF.current.children[index-1]
            let fDivision = Number(numbersf.current.children[index].value)
            let numberAmplitude =  Ls - Li
            
            if (FMoreOne != undefined) {
                let nunMedianResult = ((nDates - FMoreOne.textContent) / fDivision) * numberAmplitude + Li
                setMedianResult(nunMedianResult)
            }
            calculateFanshion(numberAmplitude)
        }

        function calculateFanshion(a){
            let arrNUmberf = []
            let listNumbersf = Array.from(numbersf.current.childNodes)

            listNumbersf.map(n => {
                n.value == "" ? arrNUmberf.push(0) : arrNUmberf.push(Number(n.value))
            })

            let seacrhValueMax = Math.max(...arrNUmberf)
            let indexValueMax = arrNUmberf.indexOf(seacrhValueMax)

            let Li = Number(numbersLi.current.children[indexValueMax].value)
            let deltaOneNumberOne = Number(numbersf.current.children[indexValueMax].value)
            let deltaOneNumberTwo = Number(numbersf.current.children[indexValueMax-1].value)
            let deltaTwoNumberTwo = Number(numbersf.current.children[indexValueMax+1].value)

            let deltaOne =  deltaOneNumberOne - deltaOneNumberTwo
            let calcDeltaTwo = deltaOneNumberOne - deltaTwoNumberTwo
            let deltaTwo = deltaOne + calcDeltaTwo

            let numberFashionResult = ((deltaOne / deltaTwo) * a) + Li
            setFashionResult(numberFashionResult)
        }
        
        createDataSend()
    }

    return(
        <div className="table-sm-dtg-container">
            <div className="table-sm-sections">
                <div className="sections-top-table-sm-dg">
                    <div className="section-li-top-table-sm-dg">Li</div>
                    <div className="section-ls-top-table-sm-dg">Ls</div>
                    <div className="section-x-top-table-sm-dg">x</div>
                    <div className="section-f-top-table-sm-dg">f</div>
                    <div className="section-xf-top-table-sm-dg">xf</div>
                    <div className="section-F-top-table-sm-dg">F</div>
                </div>
                <div className="sections-mid-table-sm-dg">
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
                    <div ref={numbersF} className="section-F-mid-table-sm-dg">
                        {
                            listRows.map(r => {
                                return <div key={r}></div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}