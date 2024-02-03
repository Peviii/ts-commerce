import { Request, Response } from 'express';
import { createValidProduct, deleteValidProduct, getProdsByFilter, getValidProduct, getValidProducts, updateValidProduct } from '../validation/product.validation';
import { CreateNewProduct, FindOneProduct, FindAllProducts, UpdateProduct, DeleteProduct, FindProductsPerWeek, FindProductsPerBrand } from '../services/product.service';
import Brand from 'models/brand.model';


export async function createProduct(req: Request<createValidProduct>, res: Response) {
    try {
        const created = await CreateNewProduct(req.body);
        return res.status(201).json(created)
    } catch (error: any) {
        return res.status(400).json(error);
    }
}

export async function findProduct(req: Request<getValidProduct["params"]>, res: Response) {
    try {
        const id = req.params.id;
        const product = await FindOneProduct({ _id: id });
        return res.status(200).json(product);
    } catch (error: any) {
        return res.status(400).json(error);
    }
}

export async function findProducts(req: Request<getValidProducts>, res: Response) {
    try {
        const products = await FindAllProducts({});
        return res.status(200).json(products);
    } catch (error: any) {
        return res.status(400).json(error);
    }
}

export async function findProductsPerBrand(req: Request<getProdsByFilter["params"]>, res: Response) {
    try {
        const brandName = req.params.brandName as string;
        const products = await FindProductsPerBrand({}, brandName);
        return res.status(200).json(products);
    } catch (error: any) {
        return res.status(400).json(error);
    }
}

export async function findProductsPerWeek(req: Request<getValidProducts>, res: Response) {
    try {
        const weeks: number = parseInt(req.query.weeks as string, 10);
        const product = await FindProductsPerWeek({}, weeks);
        return res.status(200).json(product);
    } catch (error: any) {
        return res.status(400).json(error);
    }
}

export async function updateProduct(req: Request<updateValidProduct["params"]>, res: Response) {
    try {
        const id = req.params.id;
        const updated = await UpdateProduct({ _id: id }, { $set: req.body });
        return res.status(200).json(updated);
    } catch (error: any) {
        return res.status(400).json(error);
    }
}

export async function deleteProduct(req: Request<deleteValidProduct["params"]>, res: Response) {
    try {
        const id = req.params.id;
        const deleted = await DeleteProduct({ _id: id });
        return res.status(200).json(deleted);
    } catch (error: any) {
        return res.status(400).json(error);
    }
}
