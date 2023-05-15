import { Request, Response, NextFunction } from "express";
import { findUserById } from "@service/user.service";


export default async (req: Request, res: Response, next: NextFunction) => {
    try {

        const id = +req.params.id

        const find = await findUserById(id)

        if (!find) {
            return res.status(404).json({
                message: `No user found for this ${id}`
            })
        }
        
        return res.status(201).json({
            message: "Retrive user",
            userId: find.id,
            nickname: find.nickname,
            name: find.name,
            surname: find.surname,
        })




    } catch (err) {
        next(err)
    }
}
