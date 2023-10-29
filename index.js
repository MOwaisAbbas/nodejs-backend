import express from "express"
import cors from "cors"
import router from "./Routing/index.js"
import mongoose from "./db/index.js"

const app = express()
const port = process.env.PORT || 4000
app.use(express.json())
app.use(cors())

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to the database');
});


// Middleware
app.use("/", (req, res, next) => {
    if(req.query.api_key === "123"){
        next()

    }
    else{
        res.send({message : "Not Allowed"})
    }
    console.log("request guzri")
})


app.use("/api", router)



app.listen(port, () => {
    console.log("server is running")
})
