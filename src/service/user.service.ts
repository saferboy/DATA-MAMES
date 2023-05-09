import { UserDto } from "@model/user-model.dto";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


export const allUsers = async () => {
    return prisma.user.findMany()
}



export const findUserById = async (id: number) => {
    return prisma.user.findUnique({
        where: {
            id: id
        }
    })
}


export const updateUser = async (id: number, newUser: UserDto) => {
    return prisma.user.update({
        where: {
            id: id
        },
        data: {
            name: newUser.name,
            surname: newUser.surname,
            nickname: newUser.nickname,
            password: newUser.password
        }
    })
}


export const deleteUser = async (id: number) => {
    return prisma.user.delete({
        where: {
            id: id
        }
    })
}