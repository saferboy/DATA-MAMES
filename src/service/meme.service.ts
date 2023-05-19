import { PrismaClient } from "@prisma/client";
import { MemeBody } from "@model/memeDto";
const prisma = new PrismaClient();

export const createMeme = async (meme: MemeBody) => {
  return prisma.meme.create({
    data: {
      image: meme.image,
      thumbnail: meme.thumbnail,
      description: meme.description,
      createdAt: new Date(),
      categoryId: meme.categoryId,
      userId: meme.userId,
    },
  });
};

export const findMeme = async (id: number) => {
  return prisma.meme.findUnique({
    where: {
      id,
    },
    // include: {
    //   author: {
    //   },
    //   Like: true,
    //   Comment: true,
    // },
    select: {
      id: true,
      author: {
        select: {
          id: true,
          nickname: true,
          avatar: true
        }
      },
      category: true,
      createdAt: true,
      description: true,
      image: true,
      thumbnail: true,
      _count: {
        select: {
         Like: true,
         Comment: true 
        }
      }
    }
  });
};
