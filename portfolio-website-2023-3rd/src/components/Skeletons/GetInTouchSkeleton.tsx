import React from 'react';
import { motion } from 'framer-motion';

const GetInTouchSkeleton = () => {
    return (
        <motion.div key='getInTouchSkeleton' exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className='flex flex-col justify-center items-center w-full'>
            <div className='animate-pulse bg-palette-dark-100 rounded-lg w-[8rem] h-[1.5rem]'></div>
            <div className='animate-pulse bg-palette-dark-100 rounded-lg w-[12rem] h-[1.5rem] mt-2'></div>
            <div className='animate-pulse bg-palette-dark-100 w-[12.5rem] h-[4.125rem] flex flex-row justify-center items-center mt-10 pt-[1rem] pb-[1rem] pl-[2.25rem] pr-[2.25rem] rounded-2xl'></div>
        </motion.div>
    );
};

export default GetInTouchSkeleton;   