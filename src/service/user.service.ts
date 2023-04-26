import { UserDto, UserLogin } from "@model/user-model.dto";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


export const createUser = async (data: UserDto) => {
    return prisma.user.create({
        data: {
            name: data.name,
            surname:    data.surname,
            nickname:   data.nickname,
            password:   data.password
        }
    })
}


export const findUser = async(nickname: string) => {
    return prisma.user.findUnique({
        where: {
            nickname:  nickname
        }
    })
}


