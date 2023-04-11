import { z } from 'zod';

export const params = z.object({
    id: z.string({
        required_error: ("id is required"),
    }),
});

export const createUserValidation = z.object({
    body: z.object({
        name: z.string({
            required_error: "name is required",
        }).min(3, "name should be at least 4 characters long"),
        email: z.string({
            required_error: "email is required",
        }).email("Not a valid email"),
        password: z.string({
            required_error: "password is required",
        }).min(6, "password should be at least 6 characters long"),
   }),
});

export const getUserValidation = z.object({
    params,
});

export const getUsersValidation = z.object({});

export const updateUserValidation = z.object({
    params,
    body: z.object({
        name: z.string({
            required_error: "name is required",
        }).min(3, "name should be at least 4 characters long"),
        email: z.string({
            required_error: "email is required",
        }).email("Not a valid email"),
        password: z.string({
            required_error: "password is required",
        }).min(6, "password should be at least 6 characters long"),
   }).partial(),
});

export const deleteUserValidation = z.object({
    params,
});

export type createValidUser = Omit<z.TypeOf<typeof createUserValidation>, "body">;
export type getValidUser = z.TypeOf<typeof getUserValidation>;
export type getValidUsers = z.TypeOf<typeof getUsersValidation>;
export type updateValidUser = z.TypeOf<typeof updateUserValidation>;
export type deleteValidUser = z.TypeOf<typeof deleteUserValidation>;
