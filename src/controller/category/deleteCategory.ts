import { Request, Response, NextFunction } from "express"
import { findCategory, removeCategory } from "@service/category.service"

export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        
        const id = +req.params.id
        const find = await findCategory(id)

        if(!find) {
            return res.status(404).json({
                message: `Category not found by ${id} or alredy deleted`
            })
        }

        const removed = await removeCategory(id)
        return res.status(200).json({
            message: "Category deleted",
            id: removed.id,
            title: removed.title,
            emoji: removed.emoji
        })

    } catch (error) {
        next(error)
    }
}