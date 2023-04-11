import express from 'express';
import * as OrderController from '../controllers/order.controller';

const orderRoute = express.Router();

orderRoute.post('/order/add', OrderController.createOrder);
orderRoute.get('/order/all', OrderController.findOrders);
orderRoute.get('/order/:userId', OrderController.findOrder);
orderRoute.get('/income', OrderController.income);
orderRoute.put('/order/:id/update', OrderController.updateOrder);
orderRoute.delete('/order/:id/delete', OrderController.deleteOrder);

export default orderRoute;
