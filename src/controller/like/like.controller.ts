// import { Request, Response, NextFunction } from "express";
// import { updateLike } from "@service/like.service";
// import { findMeme } from "@service/meme.service";

// export default async (req: Request, res: Response, next: NextFunction) => {
//     try {

//         const id = +req.params.id
//         const like: boolean = req.body 
//         const userID = res.locals.payload.userId

//         const find = findMeme(id)

//         if (!find) {
//             return res.status(404).json({
//                 message: `Find not found this id: ${id}`
//             })
//         }

//         const changeLike = await updateLike(id, like)
//         return res.status(201).json({
//             liked: changeLike.like
//         })

//     } catch (error) {
//         next(error)
//     }
// }