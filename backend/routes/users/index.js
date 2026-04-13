import express from "express"
import loginUser from "./login.js";
import tokenVerification from "../../config/tokenVerification.js";
import refresh from "./refresh.js";
import accessVerification from "./accessVerification.js";
import signupUser from "./signup.js";

const userRouter = express.Router()
userRouter.post("/signup", signupUser);
userRouter.post("/login", loginUser);
userRouter.post("/refresh", refresh);
userRouter.post("/token-verify", tokenVerification, accessVerification)

export default userRouter;