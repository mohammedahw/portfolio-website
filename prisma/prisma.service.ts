import { PrismaClient } from "@prisma/client";

const globalPrismaClient = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalPrismaClient.prisma ||
  new PrismaClient({
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") {
  globalPrismaClient.prisma = prisma;
}
