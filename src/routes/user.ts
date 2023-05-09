import { Router } from "express";


import allUsers from "@controller/user/allUsers";
import findUser from "@controller/user/findUser";
import updateUser from "@controller/user/updateUser";
import removeUser from "@controller/user/deleteUser"

const router = Router()

    .get('/', allUsers)
    .get('/:id', findUser)
    .put('/:id', updateUser)
    .delete('/:id', removeUser)

export default router