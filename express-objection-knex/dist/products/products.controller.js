"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class ProductsController {
    constructor() {
        this.path = '/products';
        this.router = express.Router();
        this.getAll = (request, response) => {
        };
        this.create = (request, response) => {
        };
        this.intializeRoutes();
    }
    intializeRoutes() {
        this.router.get(this.path, this.getAll);
        this.router.post(this.path, this.create);
    }
}
exports.default = ProductsController;
