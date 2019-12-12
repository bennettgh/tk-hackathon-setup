"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const Person_1 = require("./Person");
class Animal extends objection_1.Model {
}
exports.default = Animal;
// Table name is the only required property.
Animal.tableName = 'animals';
// Optional JSON schema. This is not the database schema! Nothing is generated
// based on this. This is only used for validation. Whenever a model instance
// is created it is checked against this schema. http://json-schema.org/.
Animal.jsonSchema = {
    type: 'object',
    required: ['name'],
    properties: {
        id: { type: 'integer' },
        ownerId: { type: ['integer', 'null'] },
        name: { type: 'string', minLength: 1, maxLength: 255 },
        species: { type: 'string', minLength: 1, maxLength: 255 }
    }
};
// This object defines the relations to other models. The relationMappings
// property can be a thunk to prevent circular dependencies.
Animal.relationMappings = () => ({
    owner: {
        relation: objection_1.Model.BelongsToOneRelation,
        // The related model.
        modelClass: Person_1.default,
        join: {
            from: 'animals.ownerId',
            to: 'persons.id'
        }
    }
});
