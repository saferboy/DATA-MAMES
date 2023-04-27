import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt"
import { Payload } from "@model/index";

import { findUser } from "@service/user.service";
import { sign } from '@service/jwt.service';

export default async (req: Request, res: Response, next: NextFunction) => {

    try {
        
        const { nickname, password } = req.body

        const user = await findUser(nickname)

        if (!user) {
            return res.status(401).json({
                message: "nickname or password wrong"
            })
        }

        console.log(nickname, password);
        console.log(user.password);
        console.log(bcrypt.compareSync(password, user.password));

        if(bcrypt.compareSync(password, user.password)) {
            const payload: Payload = {
                userId: user.id,
                nickname:   user.nickname,
                name:       user.name,
                surname:    user.surname
            }

            const token = await sign(payload)

            return res.status(200).json({
                userId: user.id,
                nickname:   user.nickname,
                name:       user.name,
                surname:    user.surname,
                token:      token
            })
        }
        else {
            res.status(401).json({
                message: "Email or password wrong"
            })
        }

    } catch (err) {
        next(err)
    }

}