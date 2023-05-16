import { Router } from "express";
import { createValidator } from "express-joi-validation"

import createComment from "@controller/comment/createComment";
import findComment from "@controller/comment/findComment";

import { CommentBody } from "../joi.schema";

const validator = createValidator()

const router = Router()


    .post('/memes/:id/comment', validator.body(CommentBody), createComment)
    .get('/memes/:id/comment', findComment)

export default router


// router.post('/meme', upload.single('image'), optimizeAndSave, createMeme);