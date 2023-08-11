import { FilterQuery, UpdateQuery } from 'mongoose';
import Product, { productT } from '../models/product.model';
import { CreateNewNotification } from './notification.service';
import { notificationT } from 'models/notification.model';
import { Options, pagination } from '../utils/pagination';


export async function CreateNewProduct(input: productT) {
    try {
        const product = await Product.create(input);
        
        await CreateNewNotification({
            title: `product created.`,
            description: `${product.title} has been created.`,
        } as notificationT); 

        return product;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function FindOneProduct(query: FilterQuery<productT>) {
    const product = await Product.findOne(query);
    return product;
}

export async function FindAllProducts(options: Options) {
    const product = await Product.find();
    await pagination(product, options);
    return product;
}

export async function UpdateProduct(query: FilterQuery<productT>, update: UpdateQuery<productT>) {
    
    try {
        const product = await Product.findByIdAndUpdate(query, update);

        await CreateNewNotification({
            title: `product updated.`,
            description: `${product!.title} has been updated.`,
        } as notificationT); 
        
        return product;
    } catch (error: any) {
        throw new Error(error);
    }
    
}

export async function DeleteProduct(query: FilterQuery<productT>) {
    const product = await Product.deleteOne(query);

    await CreateNewNotification({
        title: `product deleted`,
        description: `product has been deleted.`,
    } as notificationT);
    
    return product;
}
