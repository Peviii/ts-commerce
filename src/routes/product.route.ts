import express from "express";
import validate from '../middleware/validate';
import { 
    createProdValitation,
    getProdValidation,
    getProdsValidation,
    updateProdValidation,
    deleteProdValidation
} from '../validation/product.validation';
import * as ProductController from '../controllers/product.controller';

const prodRoute = express.Router();

prodRoute.post('/products/add', validate(createProdValitation), ProductController.createProduct);
prodRoute.get('/products/all', validate(getProdsValidation), ProductController.findProducts);
prodRoute.get('/products/:id', validate(getProdValidation), ProductController.findProduct);
prodRoute.put('/products/:id/update', validate(updateProdValidation), ProductController.updateProduct);
prodRoute.delete('/products/:id/delete', validate(deleteProdValidation), ProductController.deleteProduct);

export default prodRoute;
