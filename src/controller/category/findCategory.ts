import { Request, Response, NextFunction } from "express";
import { findCategory } from "@service/category.service";

export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        
        const id = +req.params.id

        const find = await findCategory(id)

        if(!find) {
            return res.status(404).json({
                message: `Not found Category by this ${id}`
            })
        }

        return res.status(201).json({
            msg: "Retrive Category",
            id: find.id,
            title: find.title,
            emoji: find.emoji
        })

    } catch (error) {
        next(error)
    }
}