import express, { NextFunction, Request, Response } from "express";
import bodyParser from 'body-parser';
import authRoutes from "./modules/auth/auth_routes";
import { errorResposnse } from "./helper/resposnse";
import todoRoutes from "./modules/todos/todos_routes";
import seedRoutes from "./modules/seeds/seeds_routes";
import morgan from "morgan";
import rateLimit from "express-rate-limit";


const app = express();
// Parse JSON bodies
app.use(bodyParser.json());

// Parse URL-encoded bodies
const rateLimiter = rateLimit({
    windowMs: 1 * 60 * 100, // 1 minute
    max: 5,
    message: "Too many reuests from this IP",
});

app.use(rateLimiter);
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));


// rouiter
app.use('/', seedRoutes);
app.use('/api/v1/todos', todoRoutes);
app.use('/api/v1/auth', authRoutes);



// client Error handeling
app.use((req: Request, res: Response, next: NextFunction) => {
    const error = new Error('Not Found');
    res.status(404).json({
        success: false,
        message: error.message,
    });
});
// server Error handeling
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'Internal Server Error',
    });
});

export default app;
