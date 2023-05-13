import { Request, Response, NextFunction } from "express";
import { allCategory } from "@service/category.service";

export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        
        const options = await allCategory()

        const mapped = options.map(option => {
            return {
                id: option.id,
                title: option.title,
                emoji: option.emoji
            }
        })

        return res.status(201).json({
            msg: "Retrive All Category",
            mapped  
        })

    } catch (error) {
        next(error)
    }
}