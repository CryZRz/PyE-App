import axios from "axios"

export const SendButtomPdf = ({data, path}) => {

    async function handleRequest(e){
        try{
            const req = await axios.post(`http://localhost:3001/${path}?type=pdf`, data)
            console.log(req)
            return window.open(`http://localhost:3001/download/pdf?file=${req.data}`)
        }catch(e){
            alert("ocurrio un error revisa que no haya campos vacios en la tabla")
        }
    }

    return(
        <div className="send-buttom-container">
            <button className="send-data-btn" onClick={handleRequest}>
                Descargar en PDF
            </button>
        </div>
    )
}