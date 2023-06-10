import { Request, Response, NextFunction } from "express";
import { allMemes } from "@service/meme.service";


export default async (req: Request, res: Response, next: NextFunction) => {
    try {

        const memes = await allMemes()

        const mapped = memes.map(meme => {
            return {
                id: meme.id,
                author: {
                    id: meme.author.id,
                    nickname: meme.author.nickname
                },
                category: {
                    id: meme.category.id,
                    title: meme.category.title
                },
                createdAt: meme.createdAt,
                image: meme.image,
                like: {
                    like_id: meme._count.Like
                },
                comment: {
                    comment_id: meme._count.Comment
                }
            }
        })

        return res.status(201).json({
            message: 'Retrive all Meme',
            mapped
        })

    } catch (error) {
        next(error)
    }
}