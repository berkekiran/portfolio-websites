import React from 'react';
import Head from 'next/head';
import type { IChildren } from '@/types/nextGlobals';
import Container from '@/components/Layout/Container';
import Header from '@/components/Sections/Header';
import Footer from '@/components/Sections/Footer';
import GetInTouch from '@/components/Sections/GetInTouch';
import { SettingsContextProvider } from '@/context/SettingsContext';

interface IProps extends IChildren {}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Berke Kiran</title>
        <meta name='description' content="Hello! I'm Berke, a Blockchain Developer with 3 years of experience. I specialize in developing smart contracts, creating decentralized applications (dApps), integrating NFTs, developing scalable front-end products with great user experiences, database management, server-side scripting, API integration, and crafting captivating two and three-dimensional games." />
        <meta name='theme-color' content='#000000' />
        <link rel='icon' href='/images/berke-kiran.png' sizes='any' />
      </Head>
      <SettingsContextProvider>
        <Container className='flex-col justify-start font-base text-base leading-[1.75rem] tracking-wider min-h-screen text-palette-base bg-palette-dark-200'>
          <Header/>
          <main className='w-screen'>
            {children}
          </main>
          <GetInTouch/>
          <Footer/>
        </Container>
      </SettingsContextProvider>
    </>
  );
};

export default Layout;