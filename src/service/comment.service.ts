import { Comment, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const createComment = async (userId: number, memeId: number, comment: string) => {
    return prisma.comment.create({
        data: {
            userId,
            memeId,
            comment,
        },
        include: {
            authorId: true,
            memesId: true
        }
    })
}


export const findComment = async (id: number) => {
    return prisma.comment.findUnique({
        where: {
            id
        },
        include: {
            authorId: true
        }
    })
}


