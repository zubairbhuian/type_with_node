import express from "express";
import { createTodoController, deleteTodoController, getTodoController, updateTodoController } from "./todos_controller";


const todoRoutes = express.Router();

todoRoutes.get('/', getTodoController);
todoRoutes.post('/', createTodoController);
todoRoutes.put('/', updateTodoController);
todoRoutes.delete('/', deleteTodoController);


export default todoRoutes;