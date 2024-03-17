import { App } from './http/app';

const PORT = Number(process.env.PORT) || 3333;

const app = new App();

app.listen(PORT);
