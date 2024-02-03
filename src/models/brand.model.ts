import mongoose from 'mongoose';
import { productT } from './product.model';

export interface brandT extends mongoose.Document {
  name: string;
  foundedYear: number;
  products: mongoose.Types.DocumentArray<productT['_id']>;
}

const BrandSchema = new mongoose.Schema<brandT>({
  name: { type: String, required: true },
  foundedYear: { type: Number, required: true },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'product' }]
}, { timestamps: true });

const Brand = mongoose.model<brandT>('Brand', BrandSchema);

export default Brand;
