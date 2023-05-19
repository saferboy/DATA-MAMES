import { Request, Response, NextFunction } from "express";
import { findComment } from "@service/comment.service";
import { findMeme } from "@service/meme.service";

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = +req.params.id;

    const find = await findMeme(id);

    if (!find) {
      return res.status(404).json({
        message: `Meme by ${id} not found`,
      });
    }

    const option = await findComment(id);

    return res.status(201).json({
      // memeId: options?.memeId,
      id: option?.id,
      comment: option?.comment,
      author: {
        id: option?.authorId.id,
        nickname: option?.authorId.nickname,
      },
    });
  } catch (error) {
    next(error);
  }
};
