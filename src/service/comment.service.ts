import { CommentBody } from "@model/commentDto";
import { Comment, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export const createComment = async (memeId: number,userId: number, comment: CommentBody) => {
    return prisma.comment.create({
        data: {
            memeId: memeId,
            userId: userId,
            comment: comment.comment,
            createdAt: comment.createdAt,
        },
        include: {
            authorId: true,
            memesId: true
        }
    })
}


export const findComment = async (id: number) => {
    return prisma.comment.findFirst({
        where: {
            id: id
        },
        include: {
            authorId:  true
        }
    })
}


