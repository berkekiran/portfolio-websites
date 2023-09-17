import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useSettingsContext } from '@/context/SettingsContext';
import Container from '@/components/Layout/Container';
import Wrapper from '@/components/Layout/Wrapper';
import TextC from '@/components/common/TextC';
import LinkC from '@/components/common/LinkC';
import GetInTouchSkeleton from '@/components/Skeletons/GetInTouchSkeleton';

const GetInTouch = () => {
  const { settings } = useSettingsContext();

  return (
      <Container className='flex-col justify-center items-center sm:pt-[1.875rem] sm:pb-[2.875rem] pt-[0.875rem] pb-[1.875rem]'>
            <Wrapper className='flex-col justify-center items-center'>
                {settings ? 
                    <>
                        <TextC className='text-palette-light-200 sm:text-xl text-sm'>Have a project in mind?</TextC>
                        <TextC className='text-palette-light-200 sm:text-xl text-sm'>Let’s create magic.</TextC>
                        <LinkC href={'mailto:' + settings?.email} className='flex flex-row justify-center items-center mt-10 pt-[1rem] pb-[1rem] pl-[2.25rem] pr-[2.25rem] rounded-2xl text-palette-light-200 bg-[#4120F3] hover:bg-[#5638F5] hover:scale-105'>
                            Get in Touch
                            <FontAwesomeIcon icon={faPaperPlane} className='w-[1.125rem] h-[1.125rem] ml-[0.75rem]' />
                        </LinkC>
                    </>
                        :
                    <GetInTouchSkeleton />
                }
            </Wrapper>
      </Container>
  );
};

export default GetInTouch;   