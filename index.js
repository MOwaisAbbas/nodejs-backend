import express from "express"
import cors from "cors"
import router from "./Routing/index.js"
const app = express()
const port = process.env.PORT || 4000
app.use(express.json())
app.use(cors())

// Middleware
app.use("/", (req, res, next) => {
    console.log("request guzri")
    next()
})


app.use("/api", router)



app.listen(port, () => {
    console.log("server is running")
})
