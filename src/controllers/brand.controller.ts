import { Request, Response } from 'express';
import { createValidBrand, deleteValidBrand, getValidBrand, getValidBrands, updateValidBrand } from '../validation/brand.validation';
import { CreateNewBrand, FindOneBrand, FindAllBrands, UpdateBrand, DeleteBrand } from '../services/brand.service';

export async function createBrand(req: Request<createValidBrand>, res: Response) {
    try {
        const created = await CreateNewBrand(req.body);
        return res.status(201).json(created)
    } catch (error: any) {
        return res.status(400).json(error);
    }
}

export async function findBrand(req: Request<getValidBrand["params"]>, res: Response) {
    try {
        const id = req.params.id;
        const brand = await FindOneBrand({ _id: id });
        return res.status(200).json(brand);
    } catch (error: any) {
        return res.status(400).json(error);
    }
}

export async function findBrands(req: Request<getValidBrands>, res: Response) {
    try {
        const brands = await FindAllBrands();
        return res.status(200).json(brands);
    } catch (error: any) {
        return res.status(400).json(error);
    }
}

export async function updateBrand(req: Request<updateValidBrand["params"]>, res: Response) {
    try {
        const id = req.params.id;
        const updated = await UpdateBrand({ _id: id }, { $set: req.body });
        return res.status(200).json(updated);
    } catch (error: any) {
        return res.status(400).json(error);
    }
}

export async function deleteBrand(req: Request<deleteValidBrand["params"]>, res: Response) {
    try {
        const id = req.params.id;
        const deleted = await DeleteBrand({ _id: id });
        return res.status(200).json(deleted);
    } catch (error: any) {
        return res.status(400).json(error);
    }
}
