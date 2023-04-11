import mongoose from 'mongoose';

export interface productT extends mongoose.Document {
    title: string;
    desc: string;
    img: string;
    qtd: number;
    category: Array<Text>;
    price: string
}

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    qtd: { type: Number, required: true },
    category: { type: Array },
    price: { type: String, required: true }
}, { timestamps: true });

const Product = mongoose.model<productT>("Product", productSchema);

export default Product;
