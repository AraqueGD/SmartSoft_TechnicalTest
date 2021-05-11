import {getRepository} from "typeorm";
import {Request, Response} from "express";
import {Products} from "../entity/Products";

export class ProductsController{

    private productsRepository = getRepository(Products);

    async getProducts(req: Request, res: Response): Promise<Response> {
        return await this.productsRepository.find({relations: ["category"]});
    }

    async createProduct(req: Request, res: Response): Promise<Response> {
        const product = new Products();
        product.name = req.body.name;
        product.price = req.body.price;
        product.inventory = req.body.inventory;
        product.category = req.body.category;

        return await this.productsRepository.save(product);
    }

    async updateProducts(req: Request, res: Response): Promise<Response> {
        const products = await this.productsRepository.findOne(req.params.id);
        if (products) {
            this.productsRepository.merge(products, req.body);
            return this.productsRepository.save(products);
        }
        return res.status(404).json({message: "Not Product Found"});
    }

    async deleteProduct(req:Request, res: Response): Promise<Response> {
        return await this.productsRepository.delete(req.params.id);
    }
}