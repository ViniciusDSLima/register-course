import { Router } from 'express';
import { controllerAdapter } from '../../../infra/webController';
import { CreateUserController } from '../controller/createUser.controller';
import { ChangeUserPasswordController } from '../controller/changeUserPassword.controller';
import { AuthenticationController } from '../controller/Authentication.controller';
import { isAuthenticated } from '../../../infra/http/middlewares/isAuthenticated';

export const UsersRoutes = Router();

UsersRoutes.post('/', controllerAdapter(new CreateUserController()));

UsersRoutes.patch('/resetPassword', isAuthenticated, controllerAdapter(new ChangeUserPasswordController()));

UsersRoutes.post('/login', controllerAdapter(new AuthenticationController()));
