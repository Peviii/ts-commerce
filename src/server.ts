import express from 'express';
import orderRoute from './routes/order.route';
import cartRoute from './routes/cart.route';
import prodRoute from './routes/product.route';
import userRoute from './routes/user.route';

export function Server() {
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(userRoute);
    app.use(prodRoute);
    app.use(cartRoute);
    app.use(orderRoute)
 // app.use(paymentRoute);
    return app;
}
