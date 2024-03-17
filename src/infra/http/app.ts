import express, { Express } from 'express';
import cors from 'cors';
import { errors } from 'celebrate';

export class App {
  private app: Express;

  constructor() {
    this.app = express();

    this.config();
    this.routes();
    this.handleParserErros();
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
  }

  private handleParserErros(): void {
    this.app.use(
      errors({
        statusCode: 422,
      }),
    );
  }

  public listen(port: Number): void {
    this.app.listen(port || 3333);
  }
}
