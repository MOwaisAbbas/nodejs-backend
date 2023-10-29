import express from "express"
import User from "../models/User.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import "dotenv/config"


const router = express.Router();




router.get("/", (req, res) => {
    const head = req.headers.authorization;
    const token = head.split(" ")
    // jwt.verify(token[1],)
    console.log(token[1])
    res.send({ message: "user mil gaya" })
})

export default router;