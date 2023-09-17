import { NextResponse } from 'next/server';
import prismaClient from '@/lib/prismaClient';
import { Memory } from '@prisma/client';

export const runtime = 'experimental-edge';

export default async function handler() {
  let memories: Memory[] | [] = [];

  memories = prismaClient ? await prismaClient.memory.findMany() : [];

  return NextResponse.json(memories || []);
}