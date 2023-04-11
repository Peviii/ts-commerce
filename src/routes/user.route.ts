import express from "express";
import validate from '../middleware/validate';
import { 
    createUserValidation, 
    deleteUserValidation, 
    getUsersValidation, 
    getUserValidation, 
    updateUserValidation 
} from '../validation/user.validation';
import * as UserController from '../controllers/user.controller';

const userRoute = express.Router();

userRoute.post('/user/register', validate(createUserValidation), UserController.createUser);
userRoute.get('/user/all', validate(getUsersValidation), UserController.findUsers);
userRoute.get('/user/:id', validate(getUserValidation), UserController.findUser);
userRoute.put('/user/:id/update', validate(updateUserValidation), UserController.updateUser);
userRoute.delete('/user/:id/delete', validate(deleteUserValidation), UserController.deleteUser);

export default userRoute;
