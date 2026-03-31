import express, { Router } from "express";
import mongoose from "./db/index.js";
import User from "./model/index.js";
import bcrypt from "bcrypt"
import helmet from "helmet";
import cors from "cors"
import router from "./routes/index.js";

const app = express()
app.use(express.json())
app.use(helmet())
app.use(cors())
app.use("/api", router)

mongoose.connection.on("open", () => {
    console.log("DB connected");
})

mongoose.connection.on("error", (err) => {
    console.log("DB error occured" , err);
})

app.listen(process.env.PORT, () => {
    console.log("testing");
})