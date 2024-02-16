"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todos_controller_1 = require("./todos_controller");
const todoRoutes = express_1.default.Router();
todoRoutes.get('/', todos_controller_1.getTodoController);
todoRoutes.post('/', todos_controller_1.createTodoController);
todoRoutes.put('/', todos_controller_1.updateTodoController);
todoRoutes.delete('/', todos_controller_1.deleteTodoController);
exports.default = todoRoutes;
//# sourceMappingURL=todos_routes.js.map