import Controller from "contrib/interfaces/controller";
import { Request, Response } from "express";
import { LibroModel } from "models/mongo/libro";

export default class LibroController implements Controller {

    public async create(req: Request, res: Response): Promise<Response> {
        const libro = new LibroModel(req.body);
        await libro.save();
        return res.send(libro);
    }
}