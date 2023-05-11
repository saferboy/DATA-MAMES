import { CommentBody } from "@model/commentDto";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export const createComment = async(memeId: number, comment: string) => {
    return prisma.comment.create({
        data: {
            comment,
            memesId: memeId
        }
    })
} 


export const findComment = async ()