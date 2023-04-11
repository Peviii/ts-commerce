import { Request, Response } from 'express';
const stripe = require('stripe')(process.env.STRIPE_KEY);

export async function effectPay(req: Request, res: Response) {
    try {
        const payment = stripe.charges.create(
            {
                source: req.body.tokenId,
                amount: req.body.amount,
                currency: "usd",
            },
            (error: any, stripeRes: any) => {
                error ? error : stripeRes;
            }
        );
        res.status(202).json(payment);
    } catch (error: any) {
        res.status(400).json(error);
    }
}
