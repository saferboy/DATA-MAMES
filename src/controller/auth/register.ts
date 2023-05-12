import { Request, Response, NextFunction } from "express";
import { UserDto } from "@model/index";
import { Payload } from "@model/index";

import { findUser, createUser } from "@service/auth.service";
import { sign } from "@service/jwt.service";

export default async (req: Request, res: Response, next: NextFunction) => {

    try {

        const userInfo: UserDto = req.body
        
        if (!req.file) {
            return res.status(400).json({
                message: "File image not provided"
            })
        }

        const avatar = req.file.path
        
        let user = await findUser(userInfo.nickname)

        if (user) {
            return res.status(409).json({
                message: `nickName ${userInfo.nickname} alredy taken`
            })
        }

        const newUser = await createUser(avatar, userInfo)

        const payload: Payload = {
            userId: newUser.id,
            nickname: newUser.nickname,
            name: newUser.name,
            surname: newUser.surname,
            permissions: []
        }

        const token = await sign(payload)

        res.status(200).json({
            userId: newUser.id,
            nickname: newUser.nickname,
            name: newUser.name,
            surname: newUser.surname,
            avatar: newUser.avatar,
            token: token
        })

    } catch (err) {
        next(err)
    }

}