"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class RestaurantsController {
    constructor() {
        this.path = '/restaurants';
        this.router = express.Router();
        this.restaurants = [
            {
                name: 'Testo Resto',
            }
        ];
        this.getAll = (request, response) => {
            response.send(this.restaurants);
        };
        this.create = (request, response) => {
            const post = request.body;
            this.restaurants.push(post);
            response.send(post);
        };
        this.intializeRoutes();
    }
    intializeRoutes() {
        this.router.get(this.path, this.getAll);
        this.router.post(this.path, this.create);
    }
}
exports.default = RestaurantsController;
