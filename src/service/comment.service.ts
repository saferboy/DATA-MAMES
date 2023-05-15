import { CommentBody } from "@model/commentDto";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

// export const createComment = async (memeId: number, comm: CommentBody) => {
//     return prisma.comment.create()
// }


export const findComment = async (memeId: number) => {
    return prisma.comment.findMany()
}


