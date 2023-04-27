import { Router } from "express";

import {createValidator} from "express-joi-validation"
const validator = createValidator()
import { userBody, loginBody } from "../joi.schema";


import register from '@controller/auth/register'
import login from "@controller/auth/login";



const router = Router()

    .post('/register',  validator.body(userBody),    register)
    .post('/login',     validator.body(loginBody),   login)

export default router