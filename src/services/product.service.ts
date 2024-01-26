import mongoose, { FilterQuery, UpdateQuery } from 'mongoose';
import Product, { productT } from '../models/product.model';
import { CreateNewNotification } from './notification.service';
import { notificationT } from '../models/notification.model';
import { Options, pagination } from '../utils/pagination';
import Brand from '../models/brand.model';


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
    const product = await Product.findOne(query).populate('brand');
    return product;
}

export async function FindAllProducts(options: Options) {
    const product = await Product.find();
    await pagination(product, options);
    return product;
}

export async function FindProductsPerBrand(options: Options, brandName: string) {
    try {   
        const existingBrand = await Brand.findOne({  name: brandName });
        if (!existingBrand) throw new Error('Marca não encontrada'); 
        const products = await Product.find({
           brand: existingBrand._id 
        });
        await pagination(products, options);
        return { brand: existingBrand, products };
      } catch (error: any) {
        throw new Error(`Erro ao buscar produtos: ${error}`);
      }
}

//essa função é algo para o futuro
export async function FindProductsPerWeek(options: Options, weeks: number) {
    const current = new Date();
    let subWeek = current;
    
    if (weeks) {
        subWeek = new Date(current.getTime() - 7 * 24 * 60 * 60 * 1000);
        subWeek.toDateString();
    }
    const products = await Product.find({
        where: {
            ...options,
            ...subWeek,
        },
    });
    if (!weeks) return FindAllProducts(options);

    await pagination(products, options);
    return products   
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
