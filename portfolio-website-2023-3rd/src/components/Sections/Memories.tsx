import React, { useEffect, useState, useRef } from 'react';
import { Memory } from '@prisma/client';
import axios from 'axios';
import Container from '@/components/Layout/Container';
import Wrapper from '@/components/Layout/Wrapper';
import TextC from '@/components/common/TextC';
import ImageC from '@/components/common/ImageC';
import MemoriesSkeleton from '@/components/Skeletons/MemoriesSkeleton';

const Memories = () => {
    const [memories, setMemories] = useState<Memory[] | []>([]);
    const memoriesFetched = useRef(false);
  
    useEffect(() => {
        if(memoriesFetched.current === false) {
            const getMemories = async () => {
                const memoriesRawData = await axios.get('/api/memories');
                
                setTimeout(() => {
                    setMemories(memoriesRawData.data);
                }, 300);
            };

            getMemories();
        }

        return() => {
            memoriesFetched.current = true;
        }
    }, []);

    return (
        <Container className='flex-col justify-center items-center sm:pt-[2.875rem] pt-[1.875rem] lg:pb-[2.875rem] md:pb-[0.875rem] sm:pb-[0.875rem] -pb-[0.125rem]'>
            <Wrapper className='flex-col sm:w-[92.5%] w-[85%] justify-center items-center'>
                {memories.length > 0 ? 
                    <>
                        <TextC className='text-palette-light-200 sm:text-xl text-sm'>Memories</TextC>
                        <TextC className='text-center md:w-auto sm:w-[90%] w-[85%] sm:text-base text-sm'>A collection of memories from my work that I&apos;m proud to share.</TextC>
                        <div className='flex flex-row flex-wrap  lg:justify-between md:justify-center sm:justify-center justify-center w-full mt-[2.5rem]'>
                            {memories.map((memory: Memory, index: number) => (
                                <div key={index} className='flex flex-col justify-between items-start lg:w-[26.75rem] md:w-[28.75rem] sm:w-[28.75rem] w-full lg:mb-0 md:mb-[2rem] sm:mb-[2rem] mb-[2rem] group'>
                                    <div className='w-full rounded-2xl p-[0.75rem] border border-palette-dark-100 transition-all ease-in-out duration-300 group-hover:bg-palette-dark-100 group-hover:bg-opacity-75 group-hover:border-palette-dark group-hover:scale-105'>
                                        <ImageC width={1920} height={1080} src={memory.image} className='w-full sm:h-[15rem] h-[10rem] rounded-2xl object-cover border border-palette-dark-100' />
                                    </div>
                                    <div className='flex sm:flex-row flex-col w-full justify-center items-center mt-6'>
                                        <TextC className='text-palette-light-200 sm:text-base text-sm'>
                                            {memory.title}
                                        </TextC>
                                        <TextC className='ml-2 mr-2 sm:block hidden'>-</TextC>
                                        <TextC className='sm:text-base text-sm'>
                                            {memory.location}
                                        </TextC>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                        :
                    <MemoriesSkeleton />
                }
            </Wrapper>
        </Container>
    );
};

export default Memories;   