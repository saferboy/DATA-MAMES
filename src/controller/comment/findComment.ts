import { Request, Response, NextFunction } from "express";
import { findComment } from "@service/comment.service";
// import { findMeme } from "@service/meme.service";

export default async (req: Request, res: Response, next: NextFunction) => {

    try {

        const id = +req.params.memeId

        // const find = await findMeme(id)

        // if (!find) {
        //     return res.status(404).json({
        //         message: `Meme by ${id} not found`
        //     })
        // }

        const options = await findComment(id)

        const mapped = options.map(option => {
            return {
                id: option.id,
                comment: option.comment
            }
        })

        return res.status(201).json({
            mapped
        })

    } catch (error) {
        next(error)
    }

}