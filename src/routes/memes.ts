import { Router } from "express";
import { upload } from "@middleware/upload";
import { createValidator } from "express-joi-validation"

import createMeme from "@controller/meme/createMeme";
import createComment from "@controller/comment/createComment";
import { CommentBody, memeBody } from "../joi.schema";

const validator = createValidator()

const router = Router()

    .post('/', upload.single('file'), validator.body(memeBody), createMeme)

    .post('/:id/comment', validator.body(CommentBody), createComment)

export default router