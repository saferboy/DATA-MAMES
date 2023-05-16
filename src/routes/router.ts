import { Router } from "express";

import account from "./account"
import auth from "./auth"
import memes from "./memes"
import user from './user'
import category from './category'
import comment from './comment'

const router = Router()

    .use('/account', account)
    .use('/auth', auth)
    .use('/memes', memes)
    .use('/user', user)
    .use('/category', category)
    .use('/comment', comment)

export default router