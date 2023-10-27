import express from "express"
const router = express.Router();


router.get("/", (req, res) => {

    res.send({ name: "HAji sahab" })

})

export default router