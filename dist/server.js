"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const bd_connect_1 = require("./helper/bd_connect");
const secret_1 = require("./utils/secret");
app_1.default.listen(secret_1.serverPort, () => {
    console.log(`Server is running  on port ${secret_1.serverPort}`);
    (0, bd_connect_1.dbConnect)(`${secret_1.dbURL}`);
});
//# sourceMappingURL=server.js.map