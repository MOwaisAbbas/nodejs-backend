import express from "express"
import User from "../models/User.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import "dotenv/config"


const router = express.Router();


router.post("/", async (req, res) => {
    try {

        const password = await bcrypt.hash(req.body.password, 10)
        const user = new User({ ...req.body, password })
        const newUser = await user.save()
        const token = await jwt.sign({ id: user._id }, process.env.PRIVATE_KEY);
        const userWithoutPassword = { ...newUser.toObject() };
        delete userWithoutPassword.password;
        return res.send({ name: "user added", userWithoutPassword ,token })
    } catch (err) {
        return res.send({ message: err.message })
    }

})

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(401).send({ status: 401, message: "user not found" })
        }
        const compare = await bcrypt.compare(password, user.password)
        if (!compare) {
            return res.status(403).send({ status: 403, message: "Password not match" })
        }
        const token = await jwt.sign({ id: user._id }, process.env.PRIVATE_KEY);
        const userWithoutPassword = { ...user.toObject() };
        delete userWithoutPassword.password;
        return res.send({ message: "User Matched", userWithoutPassword, token })
    } catch (error) {
        console.log(error.message)
    }
})

export default router;