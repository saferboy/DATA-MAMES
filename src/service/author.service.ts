import { AuthorBody } from "@model/author.dto";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


export const createAuthor = async(author: AuthorBody) => {
    return prisma.auhtor.create({
        data: {
            nickname: author.nickname,
            avatar: author.avatar
        }
    })
}


export const findAuthor = async (authorid: number) => {
    return prisma.auhtor.findUnique({
        where: {
            id: authorid
        }
    })
}


export const allAuthor = async () => {
    return prisma.auhtor.findMany()
}


export const updateAuthor = async (authorId: number, auhtor: AuthorBody) => {
    return prisma.auhtor.update({
        data: {
            nickname: auhtor.nickname,
            avatar: auhtor.avatar
        },
        where: {
            id: authorId
        }
    })
}


export const removeAuhor = async(authorId: number) => {
    return prisma.auhtor.delete({
        where: {
            id: authorId
        }
    })
}

