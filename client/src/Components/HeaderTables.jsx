export const HeaderTables = ({title, subtitle, setNumRows}) => {

    function numRows(e){
        setNumRows(e.target.value)
        console.log(e.target.value)
    }

    return(
        <header className="header-app-container">
            <div className="main-section-header">
                <div className="title-app-container">
                    <h3 className="title">{title}</h3>
                    <h3 className="sub-title">{subtitle}</h3>
                </div>
                <form className="get-num-rows-container">
                    <input 
                        onChange={numRows}
                        className="input-get-rows" 
                        type="number" 
                        placeholder="Insert a number of rows"
                        >                        
                    </input>
                </form>
            </div>
        </header>
    )
}