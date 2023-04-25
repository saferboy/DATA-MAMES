import { Router } from "express";

import account from "./account"
import auth from "./auth"
import memes from "./memes"

const router = Router()

    .use('/account', account)
    .use('/auth', auth)
    .use('/memes', memes)

export default router