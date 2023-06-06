import { Router } from "express";
import { upload } from "@middleware/upload";
import { createValidator } from "express-joi-validation"
import { memeBody, CommentBody } from "../joi.schema";
// import optimizeAndSave from '@middleware/optimazeImage'

import createMeme from "@controller/meme/createMeme";
import findMeme from "@controller/meme/findMeme";



import permissions from "@middleware/permissions";

const validator = createValidator()

const router = Router()

    .post('/', upload.single('file'), permissions("user"), createMeme)
    .get('/:id', permissions('user'), findMeme)

export default router

