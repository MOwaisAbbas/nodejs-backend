import express from "express"
import cors from "cors"
import router from "./Routing/index.js"
const app = express()
app.use(express.json())
app.use(cors())


app.use("/api", router )



app.listen(4000, () => {
    console.log("server is running")
})
