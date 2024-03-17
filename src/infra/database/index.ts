import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 3333,
  username: 'postgres',
  password: 'postgres',
  database: 'registerDB',
  synchronize: true,
  logging: true,
  entities: [],
  migrations: ['src/infra/database/migrations'],
});
