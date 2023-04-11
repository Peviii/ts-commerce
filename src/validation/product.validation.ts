import { z } from 'zod';

export const params = z.object({
    id: z.string({
        required_error: ("id is required"),
    }),
});

export const createProdValitation = z.object({
    body: z.object({
        title: z.string({
            required_error: "title is required",
        }),
        desc: z.string({
            required_error: "Description is required",
        }).min(10, "Description should be at least 10 characters long"),
        img: z.string({
            required_error: "image is required",
        }),
        qtd: z.number({
            required_error: "quantity is required"
        }),
        category: z.string({
            required_error: "category is required",
        }).array(),
        price: z.string({
            required_error: "Price is required",
        }),
   })
});

export const getProdValidation = z.object({
    params,
});

export const getProdsValidation = z.object({});

export const updateProdValidation = z.object({
    params,
    body: z.object({
        title: z.string({
            required_error: "title is required",
        }),
        desc: z.string({
            required_error: "Description is required",
        }).min(10, "Description should be at least 10 characters long"),
        img: z.string({
            required_error: "image is required",
        }),
        qtd: z.number({
            required_error: "quantity is required"
        }),
        category: z.string({
            required_error: "category is required",
        }).array(),
        price: z.string({
            required_error: "Price is required",
        }),
   }).partial(),
});

export const deleteProdValidation = z.object({
    params,
});

export type createValidProduct = Omit<z.TypeOf<typeof createProdValitation>, "body">;
export type getValidProduct = z.TypeOf<typeof getProdValidation>;
export type getValidProducts = z.TypeOf<typeof getProdsValidation>;
export type updateValidProduct = z.TypeOf<typeof updateProdValidation>;
export type deleteValidProduct = z.TypeOf<typeof getProdValidation>;
