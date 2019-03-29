"use strict";
/* app/server.ts */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import everything from express and assign it to the express variable
var express_1 = __importDefault(require("express"));
// Import WelcomeController from controllers entry point
var controllers_1 = require("./controllers");
// Create a new express application instance
var app = express_1.default();
// Mount the WelcomeController at the /welcome route
app.use('/', controllers_1.HomeController);
// Serve the application at the given port
app.listen(3000, function () {
    // Success callback
    console.log("Listening at http://localhost:3000/");
});
