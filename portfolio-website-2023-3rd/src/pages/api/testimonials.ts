import { NextResponse } from 'next/server';
import prismaClient from '@/lib/prismaClient';
import { Testimonial } from '@prisma/client';

export const runtime = 'experimental-edge';

export default async function handler() {
  let testimonials: Testimonial[] | [] = [];

  testimonials = prismaClient ? await prismaClient.testimonial.findMany() : [];

  return NextResponse.json(testimonials || []);
}