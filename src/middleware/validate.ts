import { Request, Response, NextFunction } from "express";
import { AnyZodObject, ZodError } from 'zod';

const validate = (schema: AnyZodObject) => 
(req: Request, res: Response, next: NextFunction) => {
    try {
        schema.parse({
            body: req.body,
            query: req.query,
            params: req.params,
        });
        next();
    } catch (error: any) {
        if (error instanceof ZodError) {
            return res.status(403).json({
                status: "fail",
                errors: error.errors
            });
        }
        next(error)
    }
}

export default validate;
