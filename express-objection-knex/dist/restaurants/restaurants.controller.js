"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const restaurants_service_1 = require("./restaurants.service");
class RestaurantsController {
    constructor() {
        this.path = '/restaurants';
        this.router = express.Router();
        this.getAll = (request, response) => __awaiter(this, void 0, void 0, function* () {
            const something = yield this.service.getAll();
            response.json(something);
        });
        this.create = (request, response) => __awaiter(this, void 0, void 0, function* () {
            const data = request.body;
            const restaurant = yield this.service.create(data);
            response.json(restaurant);
        });
        this.intializeRoutes();
        this.service = new restaurants_service_1.default;
    }
    intializeRoutes() {
        this.router.get(this.path, this.getAll);
        this.router.post(this.path, this.create);
    }
}
exports.default = RestaurantsController;
