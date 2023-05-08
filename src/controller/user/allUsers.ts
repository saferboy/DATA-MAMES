import { Request, Response, NextFunction } from "express";
import { allUsers } from "@service/user.service";


export default async (req: Request, res: Response, next: NextFunction) => {
    try {

        const options = await allUsers()

        const mapped = options.map(option => {
            return {
                userId: option.id,
                nickname: option.nickname,
                name: option.name,
                surname: option.surname,
                password: option.password,
            }
        })

        return res.status(201).json({
            message: "Retrive All Users",
            mapped
        })

    } catch (err) {
        next(err)
    }
}
