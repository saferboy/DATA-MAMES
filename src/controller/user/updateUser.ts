import { Request, Response, NextFunction } from "express";
import { updateUser, findUserById } from "@service/user.service";

export default async (req: Request, res: Response, next: NextFunction) => {

    try {
        
        const id = +req.params.id
        const data = req.body
        const oldUser = await findUserById(id)

        if(!oldUser) {
            return res.status(404).json({
                message: `No user found for this ${id}`
            })
        }

        const newUser = await updateUser(id, data)
        return res.status(201).json({
            message: "User update",
            id: id,
            name: newUser.name,
            surname: newUser.surname,
            nickname: newUser.nickname,
            password: newUser.password 
        })

    } catch (err) {
        next(err)
    }

}