import { Router } from "express";

import { upload } from "@middleware/upload";

import allUsers from "@controller/user/allUsers";
import findUser from "@controller/user/findUser";
import updateUser from "@controller/user/updateUser";
import removeUser from "@controller/user/deleteUser"

const router = Router()

    .get('/', allUsers)
    .get('/:id', findUser)
    .put('/:id', upload.single('file'), updateUser)
    .delete('/:id', removeUser)

export default router