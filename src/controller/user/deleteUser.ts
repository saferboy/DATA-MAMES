import { Request, Response, NextFunction } from "express";
import { deleteUser, findUserById } from "@service/user.service";


export default async (req: Request, res: Response, next: NextFunction) => {

    try {
        
        const userId = +req.params.id

        const fineduser = await findUserById(userId)

        if(!fineduser) {
            return res.status(404).json({
                message: `No user found for this ${userId}`
            })
        }

        const remove = await deleteUser(userId)

        return res.status(201).json({
            message: "User deleted",
            userId: remove.id,
            name: remove.name,
            surname: remove.surname,
            nickname: remove.nickname,
        })

    } catch (err) {
        next(err)
    }

}
