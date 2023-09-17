import { NextResponse } from 'next/server';
import prismaClient from '@/lib/prismaClient';
import { Project } from '@prisma/client';

export const runtime = 'experimental-edge';

export default async function handler() {
  let projects: Project[] | [] = [];

  projects = prismaClient ? await prismaClient.project.findMany() : [];

  return NextResponse.json(projects || []);
}