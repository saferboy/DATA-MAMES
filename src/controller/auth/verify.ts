import { Request, Response, NextFunction } from "express";
import { Payload } from "@model/index";


export default (req: Request, res: Response, next: NextFunction) => {
    try {
        
        const payload: Payload = res.locals.payload
        console.dir(res.locals)
        const { userId, name, surname, nickname, role} = payload

        res.json({
            userId,
            name,
            surname,
            nickname,
            role
        })
    } catch (err) {
        next(err)
    }
}