import { Request, Response } from 'express';
import { CreateNewOrder, FindOneOrder, FindAllOrders, Income, UpdateOrder, DeleteOrder } from '../services/order.service';

export async function createOrder(req: Request, res: Response) {
    try {
        const created = await CreateNewOrder(req.body);
        return res.status(201).json(created)
    } catch (error: any) {
        return res.status(400).json(error);
    }
}

export async function findOrder(req: Request, res: Response) {
    try {
        const userId = req.params.userId;
        const order = await FindOneOrder({ userId: userId });
        return res.status(200).json(order);
    } catch (error: any) {
        return res.status(400).json(error);
    }
}

export async function findOrders(req: Request, res: Response) {
    try {
        const orders = await FindAllOrders();
        return res.status(200).json(orders);
    } catch (error: any) {
        return res.status(400).json({ message: error });
    }
}

export async function income(req: Request, res: Response) {
    try {
        const incomeOrder = await Income();
        return res.status(200).json(incomeOrder);
    } catch (error: any) {
        return res.status(400).json({ message: error });
    }
} 

export async function updateOrder(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const updated = await UpdateOrder({ _id: id }, { $set: req.body });
        return res.status(200).json(updated);
    } catch (error: any) {
        return res.status(400).json(error);
    }
}

export async function deleteOrder(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const deleted = await DeleteOrder({ _id: id });
        return res.status(200).json(deleted);
    } catch (error: any) {
        return res.status(400).json(error);
    }
}
