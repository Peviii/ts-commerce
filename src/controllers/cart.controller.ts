import { Request, Response } from 'express';
import { CreateNewCart, FindOneCart, FindAllCarts, UpdateCart, DeleteCart } from '../services/cart.service';

export async function createCart(req: Request, res: Response) {
    try {
        const created = await CreateNewCart(req.body);
        return res.status(201).json(created)
    } catch (error: any) {
        return res.status(400).json(error);
    }
}

export async function findCart(req: Request, res: Response) {
    try {
        const userId = req.params.userId;
        const cart = await FindOneCart({ userId: userId });
        return res.status(200).json(cart);
    } catch (error: any) {
        return res.status(400).json(error);
    }
}

export async function findCarts(req: Request, res: Response) {
    try {
        const carts = await FindAllCarts();
        return res.status(200).json(carts);
    } catch (error: any) {
        return res.status(400).json(error);
    }
}

export async function updateCart(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const updated = await UpdateCart({ _id: id }, { $set: req.body });
        return res.status(200).json(updated);
    } catch (error: any) {
        return res.status(400).json(error);
    }
}

export async function deleteCart(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const deleted = await DeleteCart({ _id: id });
        return res.status(200).json(deleted);
    } catch (error: any) {
        return res.status(400).json(error);
    }
}
