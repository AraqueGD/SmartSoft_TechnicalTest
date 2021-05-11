import {getRepository} from "typeorm";
import {Request, Response} from "express";
import {User} from "../entity/User";
import { Profile } from "../entity/Profile";

export class UserController {

    private userRepository = getRepository(User);
    private profileRepository = getRepository(Profile)

    async getUsers(request: Request, response: Response): Promise<Response> {
        return this.userRepository.find();
    }

    async getUser(request: Request, response: Response): Promise<Response> {
        return await this.userRepository.findOne(request.params.id);
    }

    async updateUser(request: Request, response: Response): Promise<Response> {
        const user = await this.userRepository.findOne(request.params.id);
        if (user) {
            this.userRepository.merge(user, request.body);
            return await this.userRepository.save(user);
            
        }
        return response.status(404).json({message: "Not User Found"});
    }

    async deleteUser(request: Request, response: Response): Promise<Response> {
        // await this.profileRepository.createQueryBuilder("profile").leftJoinAndSelect("profile.user", "user").delete();
        return await this.profileRepository.delete(request.params.id);
    }
}