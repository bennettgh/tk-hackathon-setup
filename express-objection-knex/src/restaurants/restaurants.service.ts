import Restaurant from './restaurant.model'
//import Product from '../products/product.model';

class RestaurantsService {
 
  constructor() {}
 
  public getAll = async (body) => {
    const restaurant = await Restaurant.query();
    return restaurant;
  }
 
  create = async ({ name }) => {
    const restaurant = await Restaurant.query().insert({
      name
    });
    return restaurant
  }
}
 
export default RestaurantsService;