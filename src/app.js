import express from 'express';
import routes from './routes';

class App {
  // metodo chamado automaticamente
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

// module.exports = new App().server; usando o sucrase
export default new App().server;
