import express from 'express';
import * as NotificationController from '../controllers/notification.controller';

const notificationRoute = express.Router();

notificationRoute.post('/notification/add', NotificationController.createNotification);
notificationRoute.get('/notification/all', NotificationController.findNotifications);
notificationRoute.get('/notification/:id', NotificationController.findNotification);
notificationRoute.put('/notification/:id/update', NotificationController.updateNotifications);
notificationRoute.delete('/notification/:id/delete', NotificationController.deleteNotifications);

export default notificationRoute;
