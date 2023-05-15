import { Router } from "express";

import { upload } from "@middleware/upload";

import allUsers from "@controller/user-manage/allUsers";
import findUser from "@controller/user-manage/findUser";
import updateUser from "@controller/user-manage/updateUser";
import removeUser from "@controller/user-manage/deleteUser"

const router = Router()

    .get('/', allUsers)
    .get('/:id', findUser)
    .put('/:id', upload.single('file'), updateUser)
    .delete('/:id', removeUser)

export default router