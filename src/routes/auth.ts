import { Router } from "express";

import register from '@controller/auth/register'

const router = Router()

    .post('/register', register)

export default router