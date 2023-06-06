import { Router } from "express";
import { createValidator } from "express-joi-validation"
import { CategoryBody, CategoryParam } from "../joi.schema";

import createCategory from "@controller/category/createCategory";
import findCategory from "@controller/category/findCategory";
import allCategory from "@controller/category/allCategory";
import updateCategory from "@controller/category/updateCategory";
import deleteCategory from "@controller/category/deleteCategory";

import permissions from "@middleware/permissions";


const validator = createValidator()

const router = Router()

    .post('/', validator.fields(CategoryBody), permissions('user'), createCategory)
    .get('/:id', validator.params(CategoryParam), findCategory)
    .get('/', allCategory)
    .put('/:id', validator.fields(CategoryBody), updateCategory)
    .delete('/:id', deleteCategory)

export default router