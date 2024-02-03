import express from 'express';
import validate from '../middleware/validate';
import { 
    createBrandValitation,
    getBrandValidation,
    getBrandsValidation,
    updateBrandValidation,
    deleteBrandValidation
} from '../validation/brand.validation';
import * as BrandController from '../controllers/brand.controller';

const brandRoute = express.Router();

brandRoute.post('/brand/add', validate(createBrandValitation), BrandController.createBrand);
brandRoute.get('/brand/all', validate(getBrandsValidation), BrandController.findBrands);
brandRoute.get('/brand/:id', validate(getBrandValidation), BrandController.findBrand);
brandRoute.put('/brand/:id/update', validate(updateBrandValidation), BrandController.updateBrand);
brandRoute.delete('/brand/:id/delete', validate(deleteBrandValidation), BrandController.deleteBrand);

export default brandRoute;
