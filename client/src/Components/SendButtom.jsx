import axios from "axios"

export const SendButtom = ({data, path}) => {

    async function handleRequest(e){
        try{
            const req = await axios.post(`http://localhost:3001/${path}`, data)
            console.log(req)
            return window.open(`http://localhost:3001/download/exl?file=${req.data}`)
        }catch(e){
            alert("err")
        }
    }

    return(
        <div className="send-buttom-container">
            <button className="send-data-btn" onClick={handleRequest}>
                Descargar en excel
            </button>
        </div>
    )
}