import { Request, Response, NextFunction } from "express";
import { createComment } from "@service/comment.service";
import { findMeme } from "@service/meme.service";

export default async (req: Request, res: Response, next: NextFunction) => {

    try {
        
        const id = +req.params.id
        const commit = req.body.comment
        const find = await findMeme(id)

        if(!find) {
            return res.status(404).json({
                message: `Meme by ${id} not found`
            })
        }

        const newComment = await createComment(id, commit)

        return res.status(201).json({
            id: newComment.id,
            memeId: newComment.memesId,
            comment: newComment.comment
        })

    } catch (error) {
        next(error)
    }

}