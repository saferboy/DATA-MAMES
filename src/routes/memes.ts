import { Router } from "express";
import { upload } from "@middleware/upload";
import { createValidator } from "express-joi-validation"
import optimizeAndSave from '@middleware/optimazeImage'

// import createMeme from "@controller/meme/createMeme";
import findMeme from "@controller/meme/findMeme";


import createComment from "@controller/comment/createComment";
import findComment from "@controller/comment/findComment";


import { memeBody, CommentBody } from "../joi.schema";

const validator = createValidator()

const router = Router()

    // .post('/', upload.single('file'), validator.body(memeBody), createMeme)
    .get('/:id', findMeme)


    .post('/:id/comment', validator.body(CommentBody), createComment)
    .get('/:id/comment', findComment)

export default router


// router.post('/meme', upload.single('image'), optimizeAndSave, createMeme);