import App from './app';
import RestaurantsController from './restaurants/restaurants.controller';
 
import * as Knex from 'knex'
import { Model, ForeignKeyViolationError, ValidationError } from 'objection';

// Initialize knex.
const knex = Knex({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'root',
    password : '',
    database : 'tk-hackathon',
  }
});

// Bind all Models to a knex instance. If you only have one database in
// your server this is all you have to do. For multi database systems, see
// the Model.bindKnex() method.
Model.knex(knex);

const app = new App(
  [
    new RestaurantsController(),
  ],
  5000,
);
 
app.listen();
