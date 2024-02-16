import express from "express";
import seedController from "./seeds_controller";


const seedRoutes =express.Router();

seedRoutes.get('/',seedController);


export default seedRoutes;