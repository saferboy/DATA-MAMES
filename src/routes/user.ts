import { Router } from "express";


import allUsers from "@controller/user/allUsers";
import findUser from "@controller/user/findUser";

const router = Router()

    .get('/', allUsers)
    .get('/:id', findUser)

export default router