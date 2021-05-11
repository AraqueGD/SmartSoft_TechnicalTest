import { getRepository } from "typeorm";
import {Request, Response} from "express";

// Entities
import { User } from "../entity/User";

export class ProfileController{
    private userRepository = getRepository(User);

    async getProfile(req: Request, res: Response): Promise<Response> {
        const user = await this.userRepository.findOne(req.userId, {select: ["firstName", "lastName", "email", "createdAt", "updateAt", "profile"]});
        if (!user) return res.status(404).json({message: "Not User Found"});
        return await this.userRepository.findOne(user,{relations: ["profile"]});
    }

    async updateProfile(req: Request, res: Response): Promise<Response> {
        const updateProfile = await this.userRepository.findOne(req.params.id, {relations: ["profile"]});
        if (updateProfile) {
            this.userRepository.merge(updateProfile, req.body);
            return await this.userRepository.save(updateProfile);
        } else {
            return res.status(404).json({message: "Not User Found"});
        }
    }
}