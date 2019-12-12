import { Model, JSONSchema } from 'objection'
import Restaurant from '../restaurants/restaurant.model';

export default class Product extends Model {
  id!: number
  name!: string
  restaurant?: Restaurant

  // Table name is the only required property.
  static tableName = 'products'

  // Optional JSON schema. This is not the database schema! Nothing is generated
  // based on this. This is only used for validation. Whenever a model instance
  // is created it is checked against this schema. http://json-schema.org/.
  static jsonSchema: JSONSchema = {
    type: 'object',
    required: ['name'],

    properties: {
      id: { type: 'integer' },
      restaurantId: { type: ['integer', 'null'] },
      name: { type: 'string', minLength: 1, maxLength: 255 },
    }
  }

  // This object defines the relations to other models. The relationMappings
  // property can be a thunk to prevent circular dependencies.
  static relationMappings = () => ({
    owner: {
      relation: Model.BelongsToOneRelation,
      // The related model.
      modelClass: Restaurant,

      join: {
        from: 'products.restaurantId',
        to: 'restaurants.id'
      }
    }
  })
}