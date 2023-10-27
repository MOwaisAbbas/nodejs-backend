import express from "express"
import login from "./login.js"
import signup from "./signup.js"
import upload from "./upload.js"

const router = express.Router();



router.use("/login", login)
router.use("/signup", signup)
router.use("/upload", upload)


export default router;