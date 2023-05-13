import { Request, Response, NextFunction } from "express";
import { creteCategory } from "@service/category.service";
import { CategoryDto } from "@model/categoryDto";

export default async (req: Request, res: Response, next: NextFunction) => {
    try {

        const category: CategoryDto = req.body

        const newCategory = await creteCategory(category)

        return res.status(201).json({
            message: "Category crested",
            id: newCategory.id,
            title: newCategory.title,
            emoji: newCategory.emoji
        })

    } catch (error) {
        next(error)
    }
}