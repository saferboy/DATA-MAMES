import { UserDto } from "@model/user-model.dto";
import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()


export const createUser = async (data: UserDto) => {
    const hashPassword = bcrypt.hashSync(data.password, bcrypt.genSaltSync(10))
    return prisma.user.create({
        data: {
            name: data.name,
            surname:    data.surname,
            nickname:   data.nickname,
            password:   hashPassword,
            
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

