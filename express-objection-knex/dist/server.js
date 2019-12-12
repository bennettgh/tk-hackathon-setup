"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const restaurants_controller_1 = require("./restaurants/restaurants.controller");
const Knex = require("knex");
const objection_1 = require("objection");
// Initialize knex.
const knex = Knex({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'tk-hackathon',
    }
});
// Bind all Models to a knex instance. If you only have one database in
// your server this is all you have to do. For multi database systems, see
// the Model.bindKnex() method.
objection_1.Model.knex(knex);
const app = new app_1.default([
    new restaurants_controller_1.default(),
], 5000);
app.listen();
