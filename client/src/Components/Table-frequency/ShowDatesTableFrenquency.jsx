export const ShowDatesTableFrequency = ({nDates, xMin, xMax, range, xKOne, xKTwo}) => {
    return(
        <div className="show-dates-table-frequency-container">
            <div className="show-dates-frequency-sections">
                <div className="section-ndates">
                    <span>{`Numero de datos: ${nDates}`}</span>
                </div>
                <div className="section-vmin">
                    <span>{`Valor minimo: ${xMin}`}</span>
                </div>
                <div className="section-vmax">
                    <span>{`Valor maximo: ${xMax}`}</span>
                </div>
                <div className="section-range">
                    <span>{`Rango: ${range}`}</span>
                </div>
                <div className="section-k-one">
                    <span>{`K1: ${xKOne}`}</span>
                </div>
                <div className="section-k-two">
                    <span>{`K2: ${xKTwo}`}</span>
                </div>
            </div>
        </div>
    )
}