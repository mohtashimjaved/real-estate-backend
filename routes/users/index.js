import express from "express"
import getUser from "./get.js";
import createUser from "./signup.js";
import loginUser from "./login.js";
import tokenVerification from "../../config/tokenVerification.js";
import refresh from "./refresh.js";
import accessVerification from "./accessVerification.js";

const userRouter = express.Router()
userRouter.get("/", tokenVerification, getUser);
userRouter.post("/create", createUser);
userRouter.post("/login", loginUser);
userRouter.post("/refresh", refresh);
userRouter.post("/token-verify", tokenVerification, accessVerification)

export default userRouter;