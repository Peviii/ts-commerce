import { Request, Response } from 'express';
import { CreateNewNotification, FindOneNotification, FindAllNotifications, UpdateNotification, DeleteNotification } from '../services/notification.service';

export async function createNotification(req: Request, res: Response) {
    try {
        const created = await CreateNewNotification(req.body);
        return res.status(201).json(created)
    } catch (error: any) {
        return res.status(400).json(error);
    }
}

export async function findNotification(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const notification = await FindOneNotification({ _id: id });
        return res.status(200).json(notification);
    } catch (error: any) {
        return res.status(400).json(error);
    }
}

export async function findNotifications(req: Request, res: Response) {
    try {
        const notifications = await FindAllNotifications();
        return res.status(200).json(notifications);
    } catch (error: any) {
        return res.status(400).json(error);
    }
}

export async function updateNotifications(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const updated = await UpdateNotification({ _id: id }, { $set: req.body });
        return res.status(200).json(updated);
    } catch (error: any) {
        return res.status(400).json(error);
    }
}

export async function deleteNotifications(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const deleted = await DeleteNotification({ _id: id });
        return res.status(200).json(deleted);
    } catch (error: any) {
        return res.status(400).json(error);
    }
}
