import { Request, Response } from "express";
import * as dotenv from 'dotenv';
dotenv.config();

export const loginController = (req: Request, res: Response) => {
    var db=process.env.PORT;
    res.send(db);

}

// module.exports ={loginController}