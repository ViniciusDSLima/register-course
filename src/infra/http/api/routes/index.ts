import { Router } from 'express';
import { UsersRoutes } from '../../../../application/user/routes/users.routes';

export const routes = Router();

routes.use('/users', UsersRoutes);

