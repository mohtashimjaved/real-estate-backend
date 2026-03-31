import express from "express"
import getUser from "./get.js";
import createUser from "./post.js";
import loginUser from "./login.js";
import tokenVerification from "../../config/tokenVerification.js";

const userRouter = express.Router()
userRouter.get("/", tokenVerification, getUser);
userRouter.post("/create", createUser);
userRouter.post("/login", loginUser);

export default userRouter;