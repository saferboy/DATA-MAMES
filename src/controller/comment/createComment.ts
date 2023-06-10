import { Request, Response, NextFunction } from "express";
import { createComment } from "@service/comment.service";
import { findMeme } from "@service/meme.service";

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const memeid = +req.params.id;
    const comment = req.body.comment;

    const find = await findMeme(memeid);

    if (!find) {
      return res.status(404).json({
        message: `Meme by ${memeid} not found`,
      });
    }
    
    const userID = res.locals.payload.userId
    const newComment = await createComment(userID, memeid, comment);

    return res.status(201).json({
      id: newComment.id,
      user_id: newComment.userId,
      memeId: newComment.memeId,
      comment: newComment.comment,
    });

  } catch (error) {
    next(error);
  }
};
