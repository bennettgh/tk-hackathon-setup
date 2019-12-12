"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const restaurants_controller_1 = __importDefault(require("./restaurants/restaurants.controller"));
const app = new app_1.default([
    new restaurants_controller_1.default(),
], 5000);
app.listen();
