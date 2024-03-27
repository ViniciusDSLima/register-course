import { Router } from 'express';
import { UsersRoutes } from '../../../../application/user/routes/users.routes';

const routes = Router();

routes.use('/users', UsersRoutes);

