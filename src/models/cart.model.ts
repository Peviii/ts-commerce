import mongoose from 'mongoose';
import { userT } from './user.model';
import { productT } from './product.model';

export interface cartT extends mongoose.Document {
    userId: userT['_id'];
    products: [
        {
            productId: productT['_id'],
            quantity: number
        }
    ]
}

const cartSchema = new mongoose.Schema({
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
    ]
}, { timestamps: true });

const Cart = mongoose.model<cartT>("Cart", cartSchema);

export default Cart;
