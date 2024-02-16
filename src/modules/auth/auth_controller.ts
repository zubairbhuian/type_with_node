import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { authModel } from "./auth_model";
import { jwtSecretKey } from "../../utils/secret"
import { json } from "body-parser";

export const loginController = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Please provide email, and password' });
    }
    try {
        // Check if the user exists
        const user = await authModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        // Check if the password is correct
        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }
        // Create a JWT token
        const token = jwt.sign({ userId: user._id }, jwtSecretKey, { expiresIn: '1h' });
        const userWithoutPassword = { _id: user._id, email: user.email };
        res.status(200).json({
            message: 'Login successful',
            data: userWithoutPassword,
            token
        });
    } catch (error) {
        return res.status(500).json({
            message: 'server error'
        });
    }
}
// signUp
export const signUpController = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Please provide email, and password' });
    }
    try {
        // Check if the email already exists
        const existingUser = await authModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }
        // Create a new user
        const newUser = new authModel({ email, password });
        await newUser.save();
        // Create a JWT token
        const token = jwt.sign({ userId: newUser._id }, jwtSecretKey, { expiresIn: '1h' });
        const userWithoutPassword = { _id: newUser._id, email: newUser.email };
        res.status(200).json({
            message: 'Signup successful',
            data: userWithoutPassword,
            token
        });
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: 'server error'
        });
    }

}
// forget password
export const forgetPassController = (req: Request, res: Response, next: NextFunction) => {
    res.send('forget');
}
// otp
export const sendOTPController = (req: Request, res: Response, next: NextFunction) => {
    res.send('otp');
}


