import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { useSettingsContext } from '@/context/SettingsContext';
import Container from '@/components/Layout/Container';
import Wrapper from '@/components/Layout/Wrapper';
import TextC from '@/components/common/TextC';
import LinkC from '@/components/common/LinkC';
import FooterSkeleton from '@/components/Skeletons/FooterSkeleton';

const Footer = () => {
  const { settings } = useSettingsContext();

  return (
    <Container className='flex-col justify-center items-center sm:pt-[2.875rem] sm:pb-[4.875rem] pt-[1.875rem] pb-[2.875rem]'>
      <Wrapper className='flex-col w-full items-center'>
        {settings ? 
          <>
            <hr className='border-top border-palette-dark-100 w-full'/>
            <div className='flex sm:flex-row flex-col items-center justify-between sm:w-[92.5%] w-[85%] mt-12'>
              <TextC className='md:w-auto sm:w-[12.5rem] w-[12.5rem] sm:text-left text-center'>
                Designed & Developed by © {settings?.name + ' ' + new Date().getFullYear()}
              </TextC>
              <div className='flex flex-row justify-center items-center sm:mt-0 mt-8'>
                <LinkC href={settings?.linkedin} className='hover:text-palette-light-200'>
                  <FontAwesomeIcon icon={faLinkedinIn} className='w-6 h-6' />
                </LinkC>
                <LinkC href={settings?.github} className='ml-6 hover:text-palette-light-200'>
                  <FontAwesomeIcon icon={faGithub} className='w-6 h-6' />
                </LinkC>
                <LinkC href={settings?.xcom} className='ml-6 hover:text-palette-light-200'>
                  <FontAwesomeIcon icon={faXTwitter} className='w-6 h-6' />
                </LinkC>
              </div>
            </div>
          </>
            :
          <FooterSkeleton />
        }
      </Wrapper>
    </Container>
  );
};

export default Footer;  