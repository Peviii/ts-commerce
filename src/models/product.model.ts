import mongoose from 'mongoose';
import { brandT } from './brand.model';

export interface productT extends mongoose.Document {
    title: string;
    desc: string;
    img: string;
    qtd: number;
    category: Array<Text>;
    price: string;
    brand: brandT['_id'];
}

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    qtd: { type: Number, required: true },
    category: { type: Array },
    price: { type: String, required: true },
    brand: { type: mongoose.Schema.Types.ObjectId, ref: 'brand', required: true }
}, { timestamps: true });

const Product = mongoose.model<productT>("Product", productSchema);

export default Product;
