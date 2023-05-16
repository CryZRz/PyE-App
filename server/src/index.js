const express = require("express")
const cors = require("cors")

app = express()

app.use(cors({
    origin: "http://localhost:5173"
}))
app.use(express.json())

const tableFrequencyRoutes = require("./Routes/tableFrequency.routes.js")
const secondMomentRoutes = require("./Routes/secondMoment.routes.js")
const measureOfDesprisionRoutes = require("./Routes/measuresOfDeprision.routes.js")
const curtosisRoutes = require("./Routes/curtosis.routes.js")
const downloadFilesRoutes = require("./Routes/downloadFiles.routes.js")

app.use(tableFrequencyRoutes)

app.use(secondMomentRoutes)

app.use(measureOfDesprisionRoutes )

app.use(curtosisRoutes)

app.use(downloadFilesRoutes)

app.post("/suggestions", (req, res)=>{
    if (req.body.suggestion == "") {
        res.sendStatus(404).send("suggestion invalid")
    }else{
        res.sendStatus(200)
        console.log(req.body.suggestion)
    }   
})

app.listen(process.env.PORT || 3001,()=>{
    console.log("server on port 3001")
})