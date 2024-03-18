import { DataSource } from 'typeorm';
import { UserModel } from '../../application/user/typeorm/user.model';
import { CreateTableUsers1710716579865 } from './migrations/1710716579865-CreateTableUsers';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 3333,
  username: 'postgres',
  password: 'postgres',
  database: 'registerDB',
  entities: [UserModel],
  migrations: [CreateTableUsers1710716579865],
});
