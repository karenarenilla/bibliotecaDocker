import { Request, Response } from "express";

export default interface Controller {
    create(req: Request, res: Response): Promise<Response>;
}