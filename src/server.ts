import express from 'express';
import orderRoute from './routes/order.route';
import cartRoute from './routes/cart.route';
import prodRoute from './routes/product.route';
import userRoute from './routes/user.route';
import notificationRoute from './routes/notification.route';
import brandRoute from './routes/brand.route';

export function serverConnect() {
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(userRoute);
    app.use(prodRoute);
    app.use(brandRoute)
    app.use(cartRoute);
    app.use(orderRoute);
    app.use(notificationRoute);
 // app.use(paymentRoute);
    return app;
}
