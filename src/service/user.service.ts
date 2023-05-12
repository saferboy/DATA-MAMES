import { UserDto } from "@model/user-model.dto";
import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient()

export const allUsers = async () => {
    return await prisma.user.findMany()
}

export const findUserById = async (id: number) => {
    return await prisma.user.findUnique({
        where: {
            id: id
        }
    })
}


export const updateUser = async (id: number, newUser: UserDto, avatar: string) => {
    return await prisma.user.update({
        where: {
            id: id
        },
        data: {
            name: newUser.name,
            surname: newUser.surname,
            nickname: newUser.nickname,
            password: newUser.password,
            avatar:   avatar
        }
    })
}


export const deleteUser = async (id: number) => {
    return await prisma.user.delete({
        where: {
            id: id
        }
    })
}

