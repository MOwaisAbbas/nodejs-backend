import express from "express"
import User from "../models/User.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import "dotenv/config"


const router = express.Router();




router.get("/", async (req, res) => {
    const authorizationHeader = req.headers['authorization'];
    if (authorizationHeader) {
        const token = authorizationHeader.split(' ')[1];
        try {
            const decoded = jwt.verify(token, process.env.PRIVATE_KEY);
            const usersWithPassword = await User.find()
            const users = usersWithPassword.map((user) => {
                const { password, ...users } = user.toObject();
                return users;
            });

            return res.send({ message: "users", users })
        } catch (error) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
    }

})

export default router;