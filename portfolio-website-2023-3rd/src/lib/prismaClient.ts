import { PrismaClient } from '@prisma/client/edge';

let prismaClient: PrismaClient | null = null;

if (!prismaClient) {
    prismaClient = new PrismaClient();
}

export default prismaClient;