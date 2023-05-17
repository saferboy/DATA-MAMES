// import { Permission } from '@prisma/client';
import { Request, Response, NextFunction } from "express";
import { serverConfig } from '@config/index'

import { verify } from '@service/jwt.service';

export default (role: string) => {

    return async (req: Request, res: Response, next: NextFunction) => {

        const token = req.header('authorization')

        
        if (!token) {
            return res.status(401).json({
                msg: "Token not provided"
            })
        }
        
        try {
            let payload = await verify(token)
            
            
            if (role) {
                if (payload.role !== "user") {
                    return res.status(401).json({
                        message: "Acces Denied"
                    })
                }
            }
            
            res.locals.payload = payload
            next()

        } catch (error) {
            console.log(error);
            return res.status(401).send({
                message: 'invalid token',
            })
        }
    }
}


