import { App } from './http/app';
import { AppDataSource } from './database';

const app = new App();

AppDataSource.initialize().then(() => {
  app.listen(Number(process.env.PORT || 5000),
    `Server started on PORT: ${process.env.PORT || 5000}!`);
});
