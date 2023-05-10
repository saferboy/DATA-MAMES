import { Permission } from '@prisma/client';
import { Request, Response, NextFunction } from "express";
import { serverConfig } from '@config/index'

import { verify } from '@service/jwt.service';

export default (...permissions: Permission[]) => {

    return async (req: Request, res: Response, next: NextFunction) => {

        const token = req.header('authorization')

        // if (req.header('x-supervisor-key') == serverConfig.supervisorKey && (permissions.includes('surpervisor') || permissions.includes('admin'))) {
        //     return next()
        // }
    
        if (!token) {
            return res.status(401).json({
                msg: "Token not provided"
            })
        }

        try {
            
            let payload = await verify(token)

            res.locals.payload = payload

            let hasAccess = permissions.some(permission => payload.permissions.includes(permission))

            if (hasAccess) {
                const userId = +req.params.userId

                if(userId != payload.userId) {
                    return res.status(403).json({
                        message: 'Access denied to this organization'
                    })
                }
                next()
            }
            else {
                res.status(403).send({
                    message: 'Access denied. Required permissions ' + permissions
               })
            }
            
        } catch (error) {
            return res.status(401).send({ 
                message: 'invalid token'
            })
        }
    }
}


