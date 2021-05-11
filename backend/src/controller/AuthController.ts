import { getRepository } from "typeorm";
import {Request, Response} from "express";
import { User } from "../entity/User";
import { Profile } from "../entity/Profile";

export class AuthController {
    private userRepository = getRepository(User);
    // private profileRepository = getRepository(Profile)

    async signUp(req: Request, res: Response): Promise<Response> {
        const profile = new Profile();
        const newUser = new User();
        newUser.firstName = req.body.firstName;
        newUser.lastName = req.body.lastName;
        newUser.email = req.body.email;
        newUser.password = req.body.password;

        if (!req.body.firstName || !req.body.lastName || !req.body.email || !req.body.email || !req.body.password ) {
            return res.status(404).json({message: "Complete All Fields"});   
        }
        newUser.profile = profile;

        newUser.password = newUser.setPassword(newUser.password);
        await this.userRepository.save(newUser);
        const token: string = newUser.generateJWT();
        return JSON.stringify({"authToken": token});
    }

    async signIn(req: Request, res: Response): Promise<Response> {
        const {email, password} = req.body;

        if(!email && !password) {
            return res.status(404).json({message: "Incorrect or Email and Password"});
        }

        try {
            const user = await this.userRepository.findOne({email: email});
            if (!user) {
                return res.status(401).json({message: "Incorrect Password or Email"})
            }
            const isCorrect = user.isValidPassword(password);
            if (!isCorrect) {
                return res.status(401).json({message: "Incorrect Password"})
            }
            const token: string = user.generateJWT();
            return JSON.stringify({"authToken": token});
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}