import { FilterQuery, UpdateQuery } from 'mongoose';
import Cart, { cartT } from '../models/cart.model';

export async function CreateNewCart(input: cartT) {
    try {
        const cart = await Cart.create(input);
        return cart;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function FindOneCart(query: FilterQuery<cartT>) {
    const cart = await Cart.findOne(query);
    return cart;
}

export async function FindAllCarts() {
    const cart = await Cart.find();
    return cart;
}

export async function UpdateCart(query: FilterQuery<cartT>, update: UpdateQuery<cartT>) {
    const updateCart = await Cart.findByIdAndUpdate(query, update);
    return updateCart;
}

export async function DeleteCart(query: FilterQuery<cartT>) {
    const deleteCart = await Cart.deleteOne(query);
    return deleteCart;
}
