import React from 'react';
import { motion } from 'framer-motion';

const FooterSkeleton = () => {
    return (
        <motion.div key='getInTouchSkeleton' exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className='flex flex-col justify-center items-center w-full'>
            <hr className='border-top border-palette-dark-100 w-full'/>
            <div className='flex sm:flex-row flex-col items-center justify-between sm:w-[92.5%] w-[85%] mt-12'>
                <div className='animate-pulse bg-palette-dark-100 rounded-lg w-[12.5rem] h-[1.5rem]'></div>
                <div className='flex flex-row justify-center items-center sm:mt-0 mt-8'>
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
        </motion.div>
    );
};

export default FooterSkeleton;   