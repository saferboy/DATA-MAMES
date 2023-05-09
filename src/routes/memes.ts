import { Router } from "express";
import { upload } from "@middleware/upload";
import createMeme from "@controller/meme/createMeme";

const router = Router()

    .post('/', upload.single('file'), createMeme)

export default router