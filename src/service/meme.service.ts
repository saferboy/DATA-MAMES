import { PrismaClient } from "@prisma/client";
import { MemeBody } from "@model/memeDto";
const prisma = new PrismaClient()


export const createMeme = async (categoryId: number, userId: number, image: string,
    thumbnail: string, meme: MemeBody) => {
    return prisma.meme.create({
        data: {
            image: image,
            thumbnail: thumbnail,
            description: meme.description,
            createdAt: meme.createdAt,
            categoryId: categoryId,
            userId: userId
        }
    })
}


export const findMeme = async (id: number) => {
    return prisma.meme.findUnique({
        where: {
            id
        },
        include: {
            authorId: true,
            Like: true,
            Comment: true
        }
    })
}