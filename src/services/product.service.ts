import { FilterQuery, UpdateQuery } from 'mongoose';
import Product, { productT } from '../models/product.model';

export async function CreateNewProduct(input: productT) {
    try {
        const product = await Product.create(input);
        return product;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function FindOneProduct(query: FilterQuery<productT>) {
    const product = await Product.findOne(query);
    return product;
}

export async function FindAllProducts() {
    const product = await Product.find();
    return product;
}

export async function UpdateProduct(query: FilterQuery<productT>, update: UpdateQuery<productT>) {
    const updateProduct = await Product.findByIdAndUpdate(query, update);
    return updateProduct;
}

export async function DeleteProduct(query: FilterQuery<productT>) {
    const deleteProduct = await Product.deleteOne(query);
    return deleteProduct;
}
