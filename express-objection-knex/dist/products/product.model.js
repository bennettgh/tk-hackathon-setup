"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const restaurant_model_1 = require("../restaurants/restaurant.model");
class Product extends objection_1.Model {
}
exports.default = Product;
// Table name is the only required property.
Product.tableName = 'products';
// Optional JSON schema. This is not the database schema! Nothing is generated
// based on this. This is only used for validation. Whenever a model instance
// is created it is checked against this schema. http://json-schema.org/.
Product.jsonSchema = {
    type: 'object',
    required: ['name'],
    properties: {
        id: { type: 'integer' },
        restaurantId: { type: ['integer', 'null'] },
        name: { type: 'string', minLength: 1, maxLength: 255 },
    }
};
// This object defines the relations to other models. The relationMappings
// property can be a thunk to prevent circular dependencies.
Product.relationMappings = () => ({
    owner: {
        relation: objection_1.Model.BelongsToOneRelation,
        // The related model.
        modelClass: restaurant_model_1.default,
        join: {
            from: 'products.restaurantId',
            to: 'restaurants.id'
        }
    }
});
