import { Router } from 'express';
import { controllerAdapter } from '../../../infra/webController';
import { CreateUserController } from '../controller/createUser.controller';

export const UsersRoutes = Router();

UsersRoutes.post('/', controllerAdapter(new CreateUserController()));
