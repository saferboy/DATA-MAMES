import { Request, Response, NextFunction } from "express";
import { updateCategory, findCategory } from "@service/category.service";
import { CategoryDto } from "@model/categoryDto";


export default async (req: Request, res: Response, next: NextFunction) => {
    try {

        const id = +req.params.id
        const detail: CategoryDto = req.body

        const oldCtg = await findCategory(id)
        if (!oldCtg) {
            return res.status(404).json({
                msg: `Category not found this ${id}`
            })
        }

        const newCtg = await updateCategory(id, detail)

        if (oldCtg.title || oldCtg.emoji == newCtg.title || oldCtg.emoji) {
            // throw new Error("Category alredy updated");
            return res.status(400).json({
                message: "Category alredy updated"
            })
        }
        

        return res.status(201).json({
            message: "Category updated",
            id: newCtg.id,
            title: newCtg.title,
            emoji: newCtg.emoji
        })


    } catch (error) {
        next(error)
    }
}