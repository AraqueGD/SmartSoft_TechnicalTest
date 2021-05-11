import {getRepository} from "typeorm";
import {Request, Response} from "express";
import { Category } from "../entity/Category";

export class CategoryController {
    private categoryRepository = getRepository(Category);

    async getCategorys(req: Request, res: Response): Promise<Response> {
        return await this.categoryRepository.find();
    }

    async createCategory(req: Request, res: Response): Promise<Response> {
        const newCategory = new Category();
        newCategory.name = req.body.name;

        return this.categoryRepository.save(newCategory);
    }
}