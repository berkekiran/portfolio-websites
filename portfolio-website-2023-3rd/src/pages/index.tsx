import React from 'react';
import prismaClient from '@/lib/prismaClient';
import { Project, Service, Client, Memory, Testimonial, Question } from '@prisma/client';
import Featured from '@/components/Sections/Featured';
import Services from '@/components/Sections/Services';
import Clients from '@/components/Sections/Clients';
import Memories from '@/components/Sections/Memories';
import Testimonials from '@/components/Sections/Testimonials';
import Questions from '@/components/Sections/Questions';

export const runtime = 'experimental-edge';

const Home = () => {
  return (
    <>
      <Featured/>
      <Services/>
      <Clients/>
      <Memories/>
      <Testimonials/>
      <Questions/>
    </>
  );
};

export default Home;