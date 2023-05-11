import { Router } from "express";

import {createValidator} from "express-joi-validation"
const validator = createValidator()
import { userBody, loginBody } from "../joi.schema";
import permissions from "@middleware/permissions";

import register from '@controller/auth/register'
import login from "@controller/auth/login";
import verify from "@controller/auth/verify" 


const router = Router()

    .post('/register',  validator.body(userBody),    register)
    .post('/login',     validator.body(loginBody),   login)
    .get('/verify', permissions(), verify)

export default router