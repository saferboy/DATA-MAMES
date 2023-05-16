import { Request, Response, NextFunction } from "express";
import { findMeme } from "@service/meme.service";

export default async (req: Request, res: Response, next: NextFunction) => {
    try {

        const id = +req.params.id
        const find = await findMeme(id)

        if(!find) {
            return res.status(404).json({
                message: `Meme not found by this ${id}`
            })
        }

        return res.status(201).json({
            id: find.id,
            author: {
                id: find.userId,
                nickname: find.authorId.nickname,
                avatar: find.authorId.avatar
            },
            createdAt: find.createdAt,
            description: find.description,
            thumnail: find.thumbnail,
            image: find.image,
            likes: find.Like,
            comments: find.Comment
        })

    } catch (error) {
        next(error)
    }
}