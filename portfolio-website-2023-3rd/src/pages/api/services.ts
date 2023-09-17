import { NextResponse } from 'next/server';
import prismaClient from '@/lib/prismaClient';
import { Service } from '@prisma/client';

export const runtime = 'experimental-edge';

export default async function handler() {
  let services: Service[] | [] = [];

  services = prismaClient ? await prismaClient.service.findMany() : [];

  return NextResponse.json(services || []);
}