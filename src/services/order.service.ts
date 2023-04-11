import { FilterQuery, UpdateQuery } from 'mongoose';
import Order, { orderT } from '../models/order.model';

export async function CreateNewOrder(input: orderT) {
    try {
        const order = await Order.create(input);
        return order;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function FindOneOrder(query: FilterQuery<orderT>) {
    const order = await Order.findOne(query);
    return order;
}

export async function FindAllOrders() {
    const orders = await Order.find();
    return orders;
}

export async function Income() {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() -1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() -1));
    
    const income = await Order.aggregate([
        { $match: { createdAt: { $gte: previousMonth } } },
        { $project: { month: { $month: "$createdAt" }, sales: "$amount", }, },
        { $group: { _id: "$month", total: { $sum: "$sales" }, }, },
    ]);
    return income;
}

export async function UpdateOrder(query: FilterQuery<orderT>, update: UpdateQuery<orderT>) {
    const updateOrder = await Order.findByIdAndUpdate(query, update);
    return updateOrder;
}

export async function DeleteOrder(query: FilterQuery<orderT>) {
    const deleteOrder = await Order.deleteOne(query);
    return deleteOrder;
}
