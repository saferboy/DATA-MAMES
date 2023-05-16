import { Router } from "express";
import { upload } from "@middleware/upload";
import { createValidator } from "express-joi-validation"
import optimizeAndSave from '@middleware/optimazeImage'

// import createMeme from "@controller/meme/createMeme";
import findMeme from "@controller/meme/findMeme";

import { memeBody } from "../joi.schema";

const validator = createValidator()

const router = Router()

    // .post('/', upload.single('file'), validator.body(memeBody), createMeme)
    .get('/:id', findMeme)

export default router


// router.post('/meme', upload.single('image'), optimizeAndSave, createMeme);