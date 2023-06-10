import { Router } from "express";
import { upload } from "@middleware/upload";
import { createValidator } from "express-joi-validation"
import { memeBody, CommentBody } from "../joi.schema";
// import optimizeAndSave from '@middleware/optimazeImage'

import createMeme from "@controller/meme/createMeme";
import findMeme from "@controller/meme/findMeme";
import allMeme from "@controller/meme/allMeme";

import createComment from "@controller/comment/createComment";
import findComment from "@controller/comment/findComment";

// import updateLike from '@controller/like/like.controller'
import createLike from "@controller/like/createLike";


import permissions from "@middleware/permissions";

const validator = createValidator()

const router = Router()

    .post('/:id', upload.single('file'), permissions("user"), createMeme)
    .get('/:id', permissions('user'), findMeme)
    .get('/', permissions('admin'), allMeme)

    .post('/:id/comment', permissions('admin'), validator.body(CommentBody), createComment)
    .get('/:id/comment', findComment)


    .post('/:id/like', permissions('user'), createLike)
    // .patch('/:id/like', permissions('admin'), updateLike)

export default router

