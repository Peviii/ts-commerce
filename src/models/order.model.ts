import mongoose from 'mongoose';
import { userT } from './user.model';
import { productT } from './product.model';

export interface orderT extends mongoose.Document {
    userId: userT['_id'];
    products: [
        {
            productId: productT['_id'],
            quantity: number
        }
    ],
    amount: number;
    adress: object;
    status: string;
}

const orderSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'user', 
        required: true 
    },
    products: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: 'product' },
            quantity: { type: Number, default: 1 }
        }
    ],
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, default: "pending" }
}, { timestamps: true });

const Order = mongoose.model<orderT>("Order", orderSchema);

export default Order;
