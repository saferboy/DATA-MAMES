import { Request, Response, NextFunction } from "express";
import { creteCategory, findCategoryByName } from "@service/category.service";
import { CategoryDto } from "@model/categoryDto";

export default async (req: Request, res: Response, next: NextFunction) => {
    try {

        const category: CategoryDto = req.body

        const oldCategory = await findCategoryByName(category.title)

        const newCategory = await creteCategory(category)

        if (oldCategory?.title == category.title) {
            return res.status(208).json({
                message: "Category alredy created"
            })
        }

        if (category.title !== newCategory.title) {
            return res.status(201).json({
                message: "Category created",
                id: newCategory.id,
                title: newCategory.title,
                emoji: newCategory.emoji
            })
        }

    } catch (error) {
        next(error)
    }
}