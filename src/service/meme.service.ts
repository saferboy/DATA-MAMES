import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


export const createMeme = async (image: string, description: string) => {
    return prisma.memes.create({
        data: {
            image,
            description
        }
    })
}


