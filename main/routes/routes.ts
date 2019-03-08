import LibroRoutes from "routes/libro"
import { Application } from "express";

export default class Routes {
    private version: string;
    constructor(app: Application) {
      this.version = "/api";
      new LibroRoutes(this.version, app);
    }
  }