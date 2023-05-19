import { Request, Response, NextFunction } from "express";
import { createMeme } from "@service/meme.service";

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { categoryId, description } = req.body;
    const { userId } = res.locals.payload

    if (!req.file) {
      return res.status(400).json({
        message: "File image not provided",
      });
    }

    let memeBody = {
      image: req.file.filename,
      thumbnail: req.file.filename,
      description,
      userId: +userId,
      categoryId: +categoryId,
    };

    console.log(memeBody);

    const option = await createMeme(memeBody);

    return res.status(201).json({
      id: option.id,
      image: option.image,
    });
  } catch (err) {
    next(err);
  }
};
