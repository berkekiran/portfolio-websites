import React from 'react';
import Container from '@/components/Layout/Container';
import Wrapper from '@/components/Layout/Wrapper';
import TextC from '@/components/common/TextC';

const Error404 = () => {
  return (
    <>
      <Container className='flex-col justify-center items-center sm:pt-[12.875rem] pt-[6.875rem] sm:pb-[12.875rem] pb-[6.875rem]'>
          <Wrapper className='flex-col sm:w-[92.5%] w-[85%] justify-center items-center'>
              <TextC>404 - Page Not Found</TextC>
          </Wrapper>
      </Container>
    </>
  );
};

export default Error404;