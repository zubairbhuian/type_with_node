"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbURL = exports.jwtSecretKey = exports.dbPassword = exports.dbUser = exports.dbHost = exports.serverPort = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const serverPort = process.env.PORT;
exports.serverPort = serverPort;
const dbHost = process.env.DB_HOST;
exports.dbHost = dbHost;
const dbUser = process.env.DB_USER;
exports.dbUser = dbUser;
const dbPassword = process.env.DB_PASSWORD;
exports.dbPassword = dbPassword;
const jwtSecretKey = process.env.JWT_SECRET_KET;
exports.jwtSecretKey = jwtSecretKey;
const dbURL = `${dbHost}${dbUser}:${dbPassword}@cluster0.flozhhm.mongodb.net/?retryWrites=true&w=majority`;
exports.dbURL = dbURL;
//# sourceMappingURL=secret.js.map