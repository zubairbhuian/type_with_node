"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const auth_routes_1 = __importDefault(require("./modules/auth/auth_routes"));
const app = (0, express_1.default)();
// Parse JSON bodies
app.use(body_parser_1.default.json());
// Parse URL-encoded bodies
app.use(body_parser_1.default.urlencoded({ extended: true }));
const PORT = process.env.PORT;
app.use('/api/v1', auth_routes_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map