import React from 'react';
import { motion } from 'framer-motion';

const HeaderSkeleton = () => {
  return (
    <motion.div key='headerSkeleton' exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className='flex flex-col justify-start items-center w-full'>
      <div className='relative flex flex-row justify-end items-center sm:w-[92.5%] w-[85%]'>
        <div className='absolute top-0 left-0 sm:-translate-y-[3.5rem] -translate-y-[2.5rem] w-fit'>
          <div className='animate-pulse sm:w-[10rem] w-[7.5rem] sm:h-[10rem] h-[7.5rem] border rounded-full border-palette-dark-100 bg-palette-dark-100'></div>
        </div>
        <div className='flex flex-row justify-center items-center'>
          <div className='animate-pulse bg-palette-dark-100 rounded-lg'>
            <div className='sm:w-6 w-5 sm:h-6 h-5'></div>
          </div>
          <div className='animate-pulse bg-palette-dark-100 rounded-lg sm:ml-6 ml-4'>
            <div className='sm:w-6 w-5 sm:h-6 h-5'></div>
          </div>
          <div className='animate-pulse bg-palette-dark-100 rounded-lg sm:ml-6 ml-4'>
            <div className='sm:w-6 w-5 sm:h-6 h-5'></div>
          </div>
        </div>
      </div>
      <hr className='border-top rounded-full border-palette-dark-100 sm:mt-12 mt-8 w-full'/>
      <div className='flex sm:flex-row flex-col justify-between items-start sm:w-[92.5%] w-[85%] sm:mt-14 mt-12'>
        <div>
          <div className='animate-pulse bg-palette-dark-100 rounded-lg w-[8rem] h-[1.5rem]'></div>
          <div className='animate-pulse bg-palette-dark-100 rounded-lg w-[12rem] h-[1.5rem] mt-2'></div>
        </div>
        <div className='flex flex-row sm:w-auto w-full sm:justify-center justify-center items-center sm:mt-0 mt-6'>
          <div className='animate-pulse bg-palette-dark-100 rounded-lg w-[8rem] h-[1.5rem]'></div>
          <div className='sm:ml-4 ml-3'>
            <div className='animate-pulse bg-palette-dark-100 rounded-lg sm:w-[6.25rem] w-[5rem] h-[2.5rem]'></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeaderSkeleton;  