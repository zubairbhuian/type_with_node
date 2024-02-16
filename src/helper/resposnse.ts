import {Request,Response, NextFunction } from "express";

export const errorResposnse = (
    res: Response,
    { statusCode = 500, message = "Internal Server Error" } // Fixed typo here
) => {
    return res.status(statusCode).json({
        success: false,
        message,
    });
};
  
export  const successResposnse = (
      res:Response,
      { statusCode = 200, message = "Success" ,payload={}}
    ) => {
      return res.status(statusCode).json({
        success: true,
        message,
        payload
      });
    };
  