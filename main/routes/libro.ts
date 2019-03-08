import { Application } from "express";
import Controller from "contrib/interfaces/controller";
import LibroController from "controllers/libro";

export default class Libro {
    private libroController: Controller;
    
    constructor(version: string, app: Application){
        this.libroController = new LibroController()
        
        app.route(`${version}/libros`)
        .post(this.libroController.create.bind(this.libroController))
    }
}