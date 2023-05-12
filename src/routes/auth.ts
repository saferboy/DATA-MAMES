import { Router } from "express";

import { upload } from "@middleware/upload";
import { createValidator } from "express-joi-validation"
import permissions from "@middleware/permissions";
import { userBody, loginBody } from "../joi.schema";

const validator = createValidator()


import register from '@controller/auth/register'
import login from "@controller/auth/login";
import verify from "@controller/auth/verify"


const router = Router()

    .post('/register', upload.single('file'), validator.body(userBody), register)
    .post('/login', validator.body(loginBody), login)
    .get('/verify', permissions(), verify)

export default router