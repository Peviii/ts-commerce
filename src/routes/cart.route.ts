import express from 'express';
import * as CartController from '../controllers/cart.controller';

const cartRoute = express.Router();

cartRoute.post('/cart/add', CartController.createCart);
cartRoute.get('/cart/all', CartController.findCarts);
cartRoute.get('/cart/:userId', CartController.findCart);
cartRoute.put('/cart/:id/update', CartController.updateCart);
cartRoute.delete('/cart/:id/delete', CartController.deleteCart);

export default cartRoute;
