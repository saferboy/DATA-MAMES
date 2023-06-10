import { PrismaClient } from "@prisma/client";
import { MemeBody, ImageBody } from "@model/memeDto";
const prisma = new PrismaClient();

// export const createMeme = async (userId: number, categoryId: number, image: ImageBody, description: string) => {
//   return prisma.meme.create({
//     data: {
//       image: image.image,
//       thumbnail: image.thumbnail,
//       description,
//       categoryId,
//       userId,
//       createdAt: new Date(),
//     }
//   });
// };

export const createMeme = async (categoryId: number, meme: MemeBody) => {
  return prisma.meme.create({
    data: {
      image: meme.image,
      thumbnail: meme.thumbnail,
      description: meme.description,
      createdAt: new Date(),
      userId: meme.userId,
      categoryId
    },
  });
};

export const findMeme = async (id: number) => {
  return prisma.meme.findUnique({
    where: {
      id,
    },
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


export const allMemes = async () => {
  return prisma.meme.findMany({
    select: {
      id: true,
      author: {
        select: {
          id: true,
          nickname: true
        }
      },
      category: {
        select: {
          id: true,
          title: true
        }
      },
      createdAt: true,
      image: true,
      thumbnail: true,
      _count: {
        select: {
          Like: true,
          Comment: true
        }
      }
    }
  })
}