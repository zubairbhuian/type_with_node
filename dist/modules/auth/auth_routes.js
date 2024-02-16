"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("./auth_controller");
const authRoutes = express_1.default.Router();
authRoutes.post('/login', auth_controller_1.loginController);
authRoutes.post('/signUp', auth_controller_1.signUpController);
authRoutes.post('/forgetPassword', auth_controller_1.forgetPassController);
authRoutes.post('/sendOTP', auth_controller_1.sendOTPController);
exports.default = authRoutes;
//# sourceMappingURL=auth_routes.js.map