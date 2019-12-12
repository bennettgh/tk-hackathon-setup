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
const restaurant_model_1 = require("./restaurant.model");
//import Product from '../products/product.model';
class RestaurantsService {
    constructor() {
        this.getAll = (body) => __awaiter(this, void 0, void 0, function* () {
            const restaurant = yield restaurant_model_1.default.query();
            return restaurant;
        });
        this.create = ({ name }) => __awaiter(this, void 0, void 0, function* () {
            const restaurant = yield restaurant_model_1.default.query().insert({
                name
            });
            return restaurant;
        });
    }
}
exports.default = RestaurantsService;
