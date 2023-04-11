import { Request, Response } from 'express';
import { createValidUser, deleteValidUser, getValidUser, getValidUsers, updateValidUser } from '../validation/user.validation';
import { CreateNewUser, FindOneUser, FindAllUsers, UpdateUser, DeleteUser } from '../services/user.service';

export async function createUser(req: Request<createValidUser>, res: Response) {
    try {
        const created = await CreateNewUser(req.body);
        return res.status(201).json(created)
    } catch (error: any) {
        return res.status(400).json(error);
    }
}

export async function findUser(req: Request<getValidUser["params"]>, res: Response) {
    try {
        const id = req.params.id;
        const user = await FindOneUser({ _id: id });
        return res.status(200).json(user);
    } catch (error: any) {
        return res.status(400).json(error);
    }
}

export async function findUsers(req: Request<getValidUsers>, res: Response) {
    try {
        const users = await FindAllUsers();
        return res.status(200).json(users);
    } catch (error: any) {
        return res.status(400).json(error);
    }
}

export async function updateUser(req: Request<updateValidUser["params"]>, res: Response) {
    try {
        const id = req.params.id;
        const updated = await UpdateUser({ _id: id }, { $set: req.body });
        return res.status(200).json(updated);
    } catch (error: any) {
        return res.status(400).json(error);
    }
}

export async function deleteUser(req: Request<deleteValidUser["params"]>, res: Response) {
    try {
        const id = req.params.id;
        const user = await DeleteUser({ _id: id });
        return res.status(200).json(user);
    } catch (error: any) {
        return res.status(400).json(error);
    }
}
