import { Request, Response, NextFunction } from "express";
import { UserDto } from "@model/index";
import { Payload } from "@model/index";

import { findUser, createUser } from "@service/user.service";
import { sign } from "@service/jwt.service";

export default async (req: Request, res: Response, next: NextFunction) => {

    try {

        const userInfo: UserDto = req.body

        let user = await findUser(userInfo.nickname)

        if (user) {
            return res.status(409).json({
                message: `nickName ${userInfo.nickname} alredy taken`
            })
        }

        const newUser = await createUser(userInfo)

        const payload: Payload = {
            userId: newUser.id,
            nickname: newUser.nickname,
            name: newUser.name,
            surname: newUser.surname,
        }

        const token = await sign(payload)

        res.status(200).json({
            userId: newUser.id,
            nickname: newUser.nickname,
            name: newUser.name,
            surname: newUser.surname,
            token: token
        })

    } catch (err) {
        next(err)
    }

}