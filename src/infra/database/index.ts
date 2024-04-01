import { DataSource } from 'typeorm';
import { UserModel } from '../../application/user/typeorm/user.model';
import { CreateTableUsers1710716579865 } from './migrations/1710716579865-CreateTableUsers';
import { AddColumnResetPasswordIndUsers1711899301866 } from './migrations/1711899301866-AddColumnResetPasswordIndUsers';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'registerDB',
  entities: [UserModel],
  migrations: [CreateTableUsers1710716579865,
    AddColumnResetPasswordIndUsers1711899301866],
});
