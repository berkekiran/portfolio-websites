import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { useSettingsContext } from '@/context/SettingsContext';
import Container from '@/components/Layout/Container';
import Wrapper from '@/components/Layout/Wrapper';
import LinkC from '@/components/common/LinkC';
import TextC from '@/components/common/TextC';
import ImageC from '@/components/common/ImageC';
import HeaderSkeleton from '../Skeletons/HeaderSkeleton';

const Header = () => {
  const { settings } = useSettingsContext();

  return (
    <Container className='flex-col justify-center items-center sm:pt-[7.875rem] pt-[5.875rem] sm:pb-[2.875rem] pb-[2rem]'>
      <Wrapper className='flex-col w-full items-center'>
        {settings ? 
          <>
            <div className='relative flex flex-row justify-end items-center sm:w-[92.5%] w-[85%]'>
              <div className='absolute top-0 left-0 sm:-translate-y-[3.5rem] -translate-y-[2.5rem] w-fit text-lg'>
                <ImageC width={1536} height={1536} src={settings?.image} className='sm:w-[10rem] w-[7.5rem] sm:h-[10rem] h-[7.5rem] border rounded-full border-palette-dark-100' /> 
              </div>
              <div className='flex flex-row justify-center items-center'>
                <LinkC href={settings?.linkedin} className='hover:text-palette-light-200'>
                  <FontAwesomeIcon icon={faLinkedinIn} className='sm:w-6 w-5 sm:h-6 h-5' />
                </LinkC>
                <LinkC href={settings?.github} className='hover:text-palette-light-200 sm:ml-6 ml-4'>
                  <FontAwesomeIcon icon={faGithub} className='sm:w-6 w-5 sm:h-6 h-5' />
                </LinkC>
                <LinkC href={settings?.xcom} className='hover:text-palette-light-200 sm:ml-6 ml-4'>
                  <FontAwesomeIcon icon={faXTwitter} className='sm:w-6 w-5 sm:h-6 h-5' />
                </LinkC>
              </div>
            </div>
            <hr className='border-top rounded-full border-palette-dark-100 sm:mt-12 mt-8 w-full'/>
            <div className='flex sm:flex-row flex-col justify-between items-start sm:w-[92.5%] w-[85%] sm:mt-14 mt-12'>
              <div>
                <TextC className='text-palette-light-200 sm:text-xl text-base'>
                  {settings?.name}
                </TextC>
                <TextC className='flex flex-row items-center sm:text-base text-sm mt-1'>
                  {settings?.role} <span className='ml-2 text-2xl -translate-y-1'>{settings?.roleIcon}</span>
                </TextC>
              </div>
              <div className='flex flex-row sm:w-auto w-full sm:justify-center justify-center items-center sm:text-base text-sm sm:mt-0 mt-6'>
                <TextC>
                  Currently @ 
                </TextC>
                <LinkC href={settings?.currentlyLink} className='sm:ml-4 ml-3'>
                  <ImageC width={256} height={256} src={settings?.currentlyImage} className='sm:w-[6.25rem] w-[5rem]' />
                </LinkC>
              </div>
            </div>
          </>
            :
          <HeaderSkeleton />
        }
      </Wrapper>
    </Container>
  );
};

export default Header;  