import express from 'express';
import * as PayController from '../controllers/pay.controller';

const paymentRoute = express.Router();

paymentRoute.post('/payment', PayController.effectPay);

export default paymentRoute;
