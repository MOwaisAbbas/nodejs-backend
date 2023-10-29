import express from "express"
import user from "./user.js"
import upload from "./upload.js"
import test from "./test.js"

const router = express.Router();



router.use("/user", user)
router.use("/test", test)
router.use("/upload", upload)


export default router;