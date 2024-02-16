import express, { Router } from "express";
import { forgetPassController, loginController, sendOTPController, signUpController } from "./auth_controller";

const authRoutes =express.Router();

authRoutes.post('/login',loginController);
authRoutes.post('/signUp',signUpController);
authRoutes.post('/forgetPassword',forgetPassController);
authRoutes.post('/sendOTP',sendOTPController);


export default authRoutes;
