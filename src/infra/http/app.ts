import express, { Express } from 'express';
import cors from 'cors';
import { errors } from 'celebrate';
import { routes } from './api/routes';
import { configDotenv } from 'dotenv';

configDotenv();

export class App {

  private app: Express;

  constructor() {
    this.app = express();

    this.config();
    this.routes();
    this.handleParserErros();
  }

  public listen(port: Number, message: string): void {
    this.app.listen(port || 5000);

    console.log(message);
  }

  private config(): void {
    this.app.use(
      cors({
        origin: '*',
      }),
    );
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  };

  private routes(): void {
    this.app.use(routes);
  }

  private handleParserErros(): void {
    this.app.use(
      errors({
        statusCode: 422,
      }),
    );
  }
}
