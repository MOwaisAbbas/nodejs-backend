import express from "express"
import cors from "cors"
import router from "./Routing/index.js"
const app = express()
app.use(express.json())
app.use(cors())

// Middleware
app.use("/", (req, res, next) => {
    console.log("request guzri")
    next()
})


app.use("/api", router)



app.listen(4000, () => {
    console.log("server is running")
})
