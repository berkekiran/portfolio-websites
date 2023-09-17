import { NextResponse } from 'next/server';
import prismaClient from '@/lib/prismaClient';
import { Setting } from '@prisma/client';

export const runtime = 'experimental-edge';

export default async function handler() {
  let settings: Setting[] | [] = [];

  settings = prismaClient ? await prismaClient.setting.findMany({ orderBy: { id: 'asc' }, take: 1 }) : [];

  return NextResponse.json(settings || []);
}