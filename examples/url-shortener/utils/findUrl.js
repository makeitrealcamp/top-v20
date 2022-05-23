import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const findUrl = async (value, field) => {
  const longUrl = await prisma.links.findUnique({
    where: {
      [field]: value,
    },
  });

  return longUrl;
};
