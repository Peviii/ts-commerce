import { z } from 'zod';

export const params = z.object({
    id: z.string({
        required_error: ("id is required"),
    }),
});

export const createBrandValitation = z.object({
    body: z.object({
        name: z.string({
            required_error: "name is required",
        }),
        foundedYear: z.number({
            required_error: "year of foundation is required"
        }),
   })
});

export const getBrandValidation = z.object({
    params,
});

export const getBrandsValidation = z.object({});

export const updateBrandValidation = z.object({
    params,
    body: z.object({
        name: z.string({
            required_error: "name is required",
        }),
        foundedYear: z.number({
            required_error: "year of foundation is required"
        }),
   }).partial(),
});

export const deleteBrandValidation = z.object({
    params,
});

export type createValidBrand = Omit<z.TypeOf<typeof createBrandValitation>, "body">;
export type getValidBrand = z.TypeOf<typeof getBrandValidation>;
export type getValidBrands = z.TypeOf<typeof getBrandsValidation>;
export type updateValidBrand = z.TypeOf<typeof updateBrandValidation>;
export type deleteValidBrand = z.TypeOf<typeof getBrandValidation>;