import { FilterQuery, UpdateQuery } from 'mongoose';
import Notification, { notificationT } from '../models/notification.model';
import { Options, pagination } from '../utils/pagination';

export async function CreateNewNotification(input: notificationT) {
    try {
        const notification = await Notification.create(input);
        return notification;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function FindOneNotification(query: FilterQuery<notificationT>) {
    const notification = await Notification.findOne(query);
    return notification;
}

export async function FindAllNotifications(options: Options) {
    const notification = await Notification.find();
    await pagination(notification, options);
    return notification;
}

export async function UpdateNotification(query: FilterQuery<notificationT>, update: UpdateQuery<notificationT>) {
    const updatenotification = await Notification.findByIdAndUpdate(query, update);
    return updatenotification;
}

export async function DeleteNotification(query: FilterQuery<notificationT>) {
    const deletenotification = await Notification.deleteOne(query);
    return deletenotification;
}
