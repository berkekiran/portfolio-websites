import React, { useEffect, useState, useRef } from 'react';
import { Memory } from '@prisma/client';
import { motion } from 'framer-motion';

const MemoriesSkeleton = () => {
    const [memories, setMemories] = useState<Memory[] | []>([]);
    const memoriesAdded = useRef(false);
  
    useEffect(() => {
        if(memoriesAdded.current === false) {
            let memoriesTemp: Memory[] = [];
            for(let i = 0; i < 2; i++) {
                memoriesTemp.push({
                    id: memories.length.toString(),
                    title: '',
                    location: '',
                    image: '',
                    createdAt: new Date()
                } as Memory);

                setMemories(memoriesTemp);
            }            
        }

        return() => {
            memoriesAdded.current = true;
        }
    }, [memories.length]);

    return (
        <motion.div key='memoriesSkeleton' exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className='flex flex-col justify-start items-center w-full'>
            <div className='animate-pulse bg-palette-dark-100 rounded-lg w-[8rem] h-[1.5rem]'></div>
            <div className='animate-pulse bg-palette-dark-100 rounded-lg w-[12rem] h-[1.5rem] mt-2'></div>
            <div className='flex flex-row flex-wrap  lg:justify-between md:justify-center sm:justify-center justify-center w-full mt-[2.5rem]'>
                {memories.map((memory: Memory, index: number) => (
                    <div key={index} className='flex flex-col justify-between items-start lg:w-[26.75rem] md:w-[28.75rem] sm:w-[28.75rem] w-full lg:mb-0 md:mb-[2rem] sm:mb-[2rem] mb-[2rem] group'>
                        <div className='animate-pulse bg-palette-dark-100 w-full rounded-2xl p-[0.75rem] border border-palette-dark-100 transition-all ease-in-out duration-300'>
                            <div className='w-full sm:h-[15rem] h-[10rem] object-cover'></div>
                        </div>
                        <div className='flex sm:flex-row flex-col w-full justify-center items-center mt-6'>
                            <div className='animate-pulse bg-palette-dark-100 rounded-lg w-[8rem] h-[1.5rem]'></div>
                            <div className='animate-pulse bg-palette-dark-100 rounded-lg w-[4rem] h-[1.5rem] sm:ml-2 sm:mt-0 mt-2'></div>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default MemoriesSkeleton;   