import { FilterQuery, UpdateQuery } from 'mongoose';
import bcrypt from 'bcrypt';
import User, {  userT } from '../models/user.model';

export async function CreateNewUser(input: userT) {
    try {
        const user    = await User.create(input);
        const salt    = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(input.password, salt);
        return user;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function FindOneUser(query: FilterQuery<userT>) {
    const user = await User.findOne(query);
    return user;
}

export async function FindAllUsers() {
    const user = await User.find();
    return user;
}

export async function UpdateUser(query: FilterQuery<userT>, update: UpdateQuery<userT>) {
    const updateUser = await User.findByIdAndUpdate(query, update);
    return updateUser;
}

export async function DeleteUser(query: FilterQuery<userT>) {
    const deleteUser = await User.deleteOne(query);
    return deleteUser;
}
