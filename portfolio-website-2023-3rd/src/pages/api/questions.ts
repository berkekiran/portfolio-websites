import { NextResponse } from 'next/server';
import prismaClient from '@/lib/prismaClient';
import { Question } from '@prisma/client';

export const runtime = 'experimental-edge';

export default async function handler() {
  let questions: Question[] | [] = [];

  questions = prismaClient ? await prismaClient.question.findMany() : [];

  return NextResponse.json(questions || []);
}