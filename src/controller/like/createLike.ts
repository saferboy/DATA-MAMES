import { Request, Response, NextFunction } from 'express'
import { createLike } from '@service/like.service'
import { findMeme } from '@service/meme.service'


export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        
        const memeId = +req.params.id

        const likeID = req.body.likeID
        
        const userId = res.locals.payload.userId
        console.log(userId)

        const find = await findMeme(memeId)
        if(!find) {
            return res.status(404).json({
                message: `Meme not found this id: ${memeId}`
            })
        }

        const addLike = await createLike(userId, memeId, likeID)
        return res.status(201).json({
            message: `${addLike.userId} - user liked this meme`,
            likeId: addLike.id,
            // userId: addLike.userId,
            // userId: addLike.authorId.id,
            // meme_id: addLike.memeID.id,
            meme_id: addLike.memeId,

        })

    } catch (error) {
        next(error)
    }
}