import { PrismaClient } from "@prisma/client";
import { CategoryDto } from "@model/categoryDto";

const prisma = new PrismaClient();

export const creteCategory = async (category: CategoryDto) => {
  return prisma.category.create({
    data: {
      title: category.title,
      emoji: category.emoji,
    },
  });
};

export const findCategory = async (id: number) => {
  return prisma.category.findUnique({
    where: {
      id,
    },
  });
};

export const allCategory = async () => {
  return prisma.category.findMany();
};

export const updateCategory = async (id: number, category: CategoryDto) => {
  return prisma.category.update({
    where: {
      id,
    },
    data: {
      title: category.title,
      emoji: category.emoji,
    },
  });
};

export const removeCategory = async (id: number) => {
  return prisma.category.delete({
    where: {
      id,
    },
  });
};
