import express, { Request,Response } from "express";
import authRoutes from "./modules/auth/auth_routes";


const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});
 
app.use('/auth',authRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

