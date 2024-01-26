import { FilterQuery, UpdateQuery } from 'mongoose';
import Brand, { brandT } from '../models/brand.model';
import { CreateNewNotification } from './notification.service';
import { notificationT } from 'models/notification.model';

export async function CreateNewBrand(input: brandT) {
    try {
        const brand = await Brand.create(input);
        
        await CreateNewNotification({
            title: `brand registered.`,
            description: `${brand.name} has been created.`,
        } as notificationT); 

        return brand;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function FindOneBrand(query: FilterQuery<brandT>) {
    const brand = await Brand.findOne(query);
    return brand;
}

export async function FindAllBrands() {
    const brand = await Brand.find();
    return brand;
}

export async function UpdateBrand(query: FilterQuery<brandT>, update: UpdateQuery<brandT>) {
    
    try {
        const brand = await Brand.findByIdAndUpdate(query, update);

        await CreateNewNotification({
            title: `brand updated.`,
            description: `${brand!.name} has been updated.`,
        } as notificationT); 
        
        return brand;
    } catch (error: any) {
        throw new Error(error);
    }
    
}

export async function DeleteBrand(query: FilterQuery<brandT>) {
    const brand = await Brand.deleteOne(query);

    await CreateNewNotification({
        title: `brand deleted`,
        description: `brand has been deleted.`,
    } as notificationT);
    
    return brand;
}
