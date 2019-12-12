import * as express from 'express';
import Restaurant from './restaurant.model';
import RestaurantService from './restaurants.service';
 
class RestaurantsController {
  public path = '/restaurants';
  public router = express.Router();
  private service;

  constructor() {
    this.intializeRoutes();
    this.service = new RestaurantService;
  }

  public intializeRoutes() {
    this.router.get(this.path, this.getAll);
    this.router.post(this.path, this.create);
  }

  getAll = async (request: express.Request, response: express.Response) => {
    const something = await this.service.getAll()
    response.json(something);
  }

  create = async (request: express.Request, response: express.Response) => {
    const data = request.body;
    const restaurant: Restaurant = await this.service.create(data);
    response.json(restaurant);
  }
}
 
export default RestaurantsController;
