"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const product_model_1 = require("../products/product.model");
class Person extends objection_1.Model {
}
exports.default = Person;
// Table name is the only required property.
Person.tableName = 'restaurants';
// Optional JSON schema. This is not the database schema! Nothing is generated
// based on this. This is only used for validation. Whenever a model instance
// is created it is checked against this schema. http://json-schema.org/.
Person.jsonSchema = {
    type: 'object',
    required: ['name'],
    properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 255 },
    }
};
// Modifiers are reusable query snippets that can be used in various places.
Person.modifiers = {
    // Our example modifier is a a semi-dumb fuzzy name match. We split the
    // name into pieces using whitespace and then try to partially match
    // each of those pieces to both the `firstName` and the `lastName`
    // fields.
    searchByName(query, name) {
        // This `where` simply creates parentheses so that other `where`
        // statements don't get mixed with the these.
        query.where(query => {
            for (const namePart of name.trim().split(/\s+/)) {
                for (const column of ['name']) {
                    query.orWhereRaw('lower(??) like ?', [column, namePart.toLowerCase() + '%']);
                }
            }
        });
    }
};
// This object defines the relations to other models. The relationMappings
// property can be a thunk to prevent circular dependencies.
Person.relationMappings = () => ({
    products: {
        relation: objection_1.Model.HasManyRelation,
        // The related model. This can be either a Model subclass constructor or an
        // absolute file path to a module that exports one.
        modelClass: product_model_1.default,
        join: {
            from: 'restaurants.id',
            to: 'products.restaurantId'
        }
    },
});
