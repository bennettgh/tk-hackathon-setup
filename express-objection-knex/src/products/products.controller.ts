import * as express from 'express';
import Product from './product.interface';
 
class ProductsController {
  public path = '/products';
  public router = express.Router();
 
  constructor() {
    this.intializeRoutes();
  }
 
  public intializeRoutes() {
    this.router.get(this.path, this.getAll);
    this.router.post(this.path, this.create);
  }
 
  getAll = (request: express.Request, response: express.Response) => {
  }
 
  create = (request: express.Request, response: express.Response) => {
  }
}
 
export default ProductsController;
