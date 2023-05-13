import { Router } from "express";

import account from "./account"
import auth from "./auth"
// import memes from "./memes"
import user from './user'
import category from './category'
const router = Router()

    .use('/account', account)
    .use('/auth', auth)

    // .use('/memes', memes)
    .use('/user', user)
    .use('/category', category)

export default router