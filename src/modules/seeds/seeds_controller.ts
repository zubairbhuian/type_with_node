import {Request,Response, NextFunction } from "express";

const seedController =(req:Request,res:Response,next:NextFunction)=>{
    res.send('This project is under development');
}

export default seedController;