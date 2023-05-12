// import { Request, Response, NextFunction } from "express";
// import { createMeme } from "@service/meme.service";


// export default async (req: Request, res: Response, next: NextFunction) => {
//     try {
        
//         const description = req.body.description
//         if (!req.file) {
//             return res.status(400).json({
//                 message: "File image not provided"
//             })
//         }

//         const image = req.file.path

//         const option = await createMeme(image, description)

//         return res.status(201).json({
//             id: option.id,
//             image: option.image,
//         })

//     } catch (err) {
//         next(err)
//     }
// }