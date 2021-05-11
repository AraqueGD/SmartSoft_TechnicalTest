import {Request, Response, NextFunction} from "express"
import * as jwt from "jsonwebtoken";

interface IPlayload {
    id: string;
    iat: number;
    exp: number;
}

export const TokenValidation = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header("auth-token");
    if (!token) {
        return res.status(401).json({message: "Access Denied"});
    }
    const payload = jwt.verify(token, "SECRET") as IPlayload;
    console.log(payload);
    req.userId = payload.id;
    next();
}