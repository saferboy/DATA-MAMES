import { UserDto } from "@model/user-model.dto";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


export const allUsers = async () => {
    return prisma.user.findMany()
}

export const deleteUser = async (id: number) => {
    return prisma.user.delete({
        where: {
            id: id
        }
    })
}


export const findUserById = async (id: number) => {
    return prisma.user.findUnique({
        where: {
            id: id
        }
    })
}