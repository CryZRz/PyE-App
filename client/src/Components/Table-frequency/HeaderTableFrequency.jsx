export const HeaderTableFrequency = ({setNumberRows, setNumberColumns}) => {
    
    function getNumberRows(e) {
        setNumberRows(e.target.value)
    }

    function getNumberColumns(e) {
        setNumberColumns(e.target.value)
    }
    
    return (
        <div className="header-table-frequency-container">
            <div className="hader-table-frequency-sections">
                <div className="section-title-table-frequency">
                    <h3 className="title-table-frequency">
                        Tabla de frencuencia
                    </h3>
                </div>
                <div className="section-get-nums">
                    <input 
                        onChange={getNumberRows}
                        className="get-rows-table-frequency" 
                        type="number" 
                        placeholder="numero de filas">
                    </input>
                    <input 
                        onChange={getNumberColumns}
                        className="get-colums-table-frequency" 
                        type="number"
                        placeholder="numero de columnas">
                    </input>
                </div>
            </div>
        </div>
    )
} 