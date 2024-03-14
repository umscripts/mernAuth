import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import { UserRouter } from "./routes/router.js";
dotenv.config();

const app = express();
app.use(express.json());
// app.get('/go', (req, res) => {
//     res.send("Heflsdjlksdgd");
// });
app.use(cors());
app.use('/auth', UserRouter);
mongoose.connect("mongodb://localhost:27017/authentication");

app.listen(process.env.PORT, () => {
    console.log("Server is running successfully");
});