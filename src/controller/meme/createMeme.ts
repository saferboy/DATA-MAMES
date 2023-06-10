// import { Request, Response, NextFunction } from "express";
// import { createMeme } from "@service/meme.service";
// import { findCategory } from "@service/category.service";

// export default async (req: Request, res: Response, next: NextFunction) => {
//   try {

//     const description = req.body.description

//     const id = +req.params.id
//     const userID = res.locals.payload.userId

//     const find = await findCategory(id)
//     if (!find) {
//       return res.status(404).json({
//         message: `Category not found this id: ${id}`
//       })
//     }

//     if (!req.file) {
//       return res.status(400).json({
//         message: "File image not provided",
//       });
//     }

//     let img = {
//       image: req.file.filename,
//       thumbnail: req.file.filename
//     }


//     const option = await createMeme(userID, id, img, description);

//     return res.status(201).json({
//       id: option.id,
//       image: option.image,
//     });
//   } catch (err) {
//     next(err);
//   }
// };

import { Request, Response, NextFunction } from "express";
import { createMeme } from "@service/meme.service";
import { findCategory } from "@service/category.service";

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const description = req.body.description;
    const id = +req.params.id
    const { userId } = res.locals.payload

    const find = await findCategory(id)
    if (!find) {
      return res.status(404).json({
        message: `Category not found this id: ${id}`
      })
    }

    if (!req.file) {
      return res.status(400).json({
        message: "File image not provided",
      });
    }

    let meme = {
      image: req.file.filename,
      thumbnail: req.file.filename,
      description: description,
      userId: +userId,
    };

    // console.log(memeBody);

    const option = await createMeme(id, meme);

    return res.status(201).json({
      id: option.id,
      image: option.image,
    });
  } catch (err) {
    next(err);
  }
};