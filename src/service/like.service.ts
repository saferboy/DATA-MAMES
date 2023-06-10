import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const createLike = async (userId: number, memeId: number, likeID: string) => {
    return prisma.like.create({
        data: {
            userId,
            memeId,
            likeID
        },
        // include: {
        //     memeID: true,
        //     authorId: true
        // }
    })
}

export const removeLike = async (id: number) => {
    return prisma.like.delete({
        where: { id }
    })
}

export const findLike = async (id: number) => {
    return prisma.like.findUnique({
        where: {
            id
        }
    })

} 
