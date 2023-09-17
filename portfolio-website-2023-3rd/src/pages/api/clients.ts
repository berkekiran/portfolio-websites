import { NextResponse } from 'next/server';
import prismaClient from '@/lib/prismaClient';
import { Client } from '@prisma/client';

export const runtime = 'experimental-edge';

export default async function handler() {
  let clients: Client[] | [] = [];

  clients = prismaClient ? await prismaClient.client.findMany() : [];

  return NextResponse.json(clients || []);
}