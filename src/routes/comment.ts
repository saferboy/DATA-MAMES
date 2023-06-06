import { Router } from "express";
import { createValidator } from "express-joi-validation"

import createComment from "@controller/comment/createComment";
import findComment from "@controller/comment/findComment";

import { CommentBody } from "../joi.schema";
import permissions from "@middleware/permissions";

const validator = createValidator()

const router = Router()


router.post('/memes/:id/comment', permissions('user'), validator.body(CommentBody), createComment)
router.get('/memes/:id/comment', findComment)

export default router


// router.post('/meme', upload.single('image'), optimizeAndSave, createMeme);