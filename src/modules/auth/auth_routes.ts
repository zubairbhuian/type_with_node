import { Router, Request, Response } from "express";
import { loginController } from "./auth_controller";


const authRouter = Router();

export default authRouter.get("/",loginController);