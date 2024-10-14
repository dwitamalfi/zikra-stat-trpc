// prisma-client.ts
import { PrismaClient as PrismaClient1 } from './generated/client1';
import { PrismaClient as PrismaClient2 } from './generated/client2';

// Reuse Prisma clients, especially in development where hot reloading can recreate instances
const prismaClientDb1Singleton = () => new PrismaClient1();
const prismaClientDb2Singleton = () => new PrismaClient2();

declare global {
  // Declare global variables to hold Prisma instances to avoid re-instantiation
  var prismaDb1: PrismaClient1 | undefined;
  var prismaDb2: PrismaClient2 | undefined;
}

// Use existing Prisma instances if they exist, or create new ones
const prismaDb1 = globalThis.prismaDb1 ?? prismaClientDb1Singleton();
const prismaDb2 = globalThis.prismaDb2 ?? prismaClientDb2Singleton();

if (process.env.NODE_ENV !== 'production') {
  globalThis.prismaDb1 = prismaDb1;
  globalThis.prismaDb2 = prismaDb2;
}

export { prismaDb1, prismaDb2 };
