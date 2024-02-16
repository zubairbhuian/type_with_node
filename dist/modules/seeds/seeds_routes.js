"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const seeds_controller_1 = __importDefault(require("./seeds_controller"));
const seedRoutes = express_1.default.Router();
seedRoutes.get('/', seeds_controller_1.default);
exports.default = seedRoutes;
//# sourceMappingURL=seeds_routes.js.map