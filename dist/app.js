"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const auth_routes_1 = __importDefault(require("./modules/auth/auth_routes"));
const todos_routes_1 = __importDefault(require("./modules/todos/todos_routes"));
const seeds_routes_1 = __importDefault(require("./modules/seeds/seeds_routes"));
const morgan_1 = __importDefault(require("morgan"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const app = (0, express_1.default)();
// Parse JSON bodies
app.use(body_parser_1.default.json());
// Parse URL-encoded bodies
const rateLimiter = (0, express_rate_limit_1.default)({
    windowMs: 1 * 60 * 100, // 1 minute
    max: 5,
    message: "Too many reuests from this IP",
});
app.use(rateLimiter);
app.use((0, morgan_1.default)("dev"));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.urlencoded({ extended: true }));
// rouiter
app.use('/', seeds_routes_1.default);
app.use('/api/v1/todos', todos_routes_1.default);
app.use('/api/v1/auth', auth_routes_1.default);
// client Error handeling
app.use((req, res, next) => {
    const error = new Error('Not Found');
    res.status(404).json({
        success: false,
        message: error.message,
    });
});
// server Error handeling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'Internal Server Error',
    });
});
exports.default = app;
//# sourceMappingURL=app.js.map