import express from "express";
import bcrypt from "bcrypt";
import { User } from "../models/userModel.js";

const router = express.Router();

router.post('/auth/signup', async (req, res) => {
    const { username, email, password } = req.body;

    const user = await User.findOne({ email });
    if (user) {
        return res.json({ message: "user already existed" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
        username, email, password: hashPassword
    });

    await newUser.save();
    return res.json({ message: "record registered" });
});

export { router as UserRouter };