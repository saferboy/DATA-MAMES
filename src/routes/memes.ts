import { Router } from "express";
import { upload } from "@middleware/upload";
import { createValidator } from "express-joi-validation"
import optimizeAndSave from '@middleware/optimazeImage'

import createMeme from "@controller/meme/createMeme";
import findMeme from "@controller/meme/findMeme";


import createComment from "@controller/comment/createComment";
import findComment from "@controller/comment/findComment";

import { memeBody, CommentBody } from "../joi.schema";
import permissions from "@middleware/permissions";

const validator = createValidator()

const router = Router()

    .post('/',  upload.single('file'), permissions("user"), createMeme)
    .get('/:id', permissions("user"), findMeme)


    // .post('/:id/comment', validator.body(CommentBody), createComment)
    // .get('/:id/comment', findComment)

export default router

