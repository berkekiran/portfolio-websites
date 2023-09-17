import React, { useEffect, useState, useRef } from 'react';
import { Testimonial } from '@prisma/client';
import { motion } from 'framer-motion';

const TestimonialsSkeleton = () => {
    const [testimonials, setTestimonials] = useState<Testimonial[] | []>([]);
    const testimonialsAdded = useRef(false);
  
    useEffect(() => {
        if(testimonialsAdded.current === false) {
            let testimonialsTemp: Testimonial[] = [];
            for(let i = 0; i < 3; i++) {
                testimonialsTemp.push({
                    id: testimonials.length.toString(),
                    image: '',
                    createdAt: new Date()
                } as Testimonial);

                setTestimonials(testimonialsTemp);
            }            
        }

        return() => {
            testimonialsAdded.current = true;
        }
    }, [testimonials.length]);

    return (
        <motion.div key='testimonialsSkeleton' exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className='flex flex-col justify-start items-center w-full'>
            <div className='animate-pulse bg-palette-dark-100 rounded-lg w-[8rem] h-[1.5rem]'></div>
            <div className='animate-pulse bg-palette-dark-100 rounded-lg w-[12rem] h-[1.5rem] mt-2'></div>            
            <div className='flex flex-row flex-wrap lg:justify-between md:justify-center sm:justify-center justify-center items-center w-full mt-[2.5rem]'>
                {testimonials.map((testimonial: Testimonial, index: number) => (
                    <div key={index} className={'flex flex-col justify-start items-start p-[1.75rem] rounded-2xl border border-palette-dark-100 transition-allease-in-out duration-300 ' + 
                            (index == (testimonials.length - 1) && (index + 1) % 2 != 0 ? 'lg:h-[12.75rem] md:h-[16.25rem] sm:h-[16.25rem] h-auto lg:w-full md:w-[28.75rem] sm:w-[28.75rem] w-full ' : ('sm:h-[16.25rem] h-auto lg:w-[26.75rem] md:w-[28.75rem] sm:w-[28.75rem] w-full ')) +
                            (index > 0 ? (index > 1 ? 'lg:mt-[2rem] md:mt-[2rem] sm:mt-[2rem] mt-[2rem]' : 'lg:mt-0 md:mt-[2rem] sm:mt-[2rem] mt-[2rem]') : '')
                        }
                    >
                        <div className='animate-pulse bg-palette-dark-100 rounded-lg w-full h-[1.5rem]'></div>
                        {index == (testimonials.length - 1) ? 
                            <>
                                <div className='lg:hidden flex animate-pulse bg-palette-dark-100 rounded-lg w-full h-[1.5rem] mt-2'></div>
                                <div className='lg:hidden flex animate-pulse bg-palette-dark-100 rounded-lg w-full h-[1.5rem] mt-2'></div>
                                <div className='lg:hidden flex animate-pulse bg-palette-dark-100 rounded-lg w-[75%] h-[1.5rem] mt-2'></div>
                                <div className='lg:flex hidden animate-pulse bg-palette-dark-100 rounded-lg w-[75%] h-[1.5rem] mt-2'></div>
                            </>
                                :
                            <>
                                <div className='animate-pulse bg-palette-dark-100 rounded-lg w-full h-[1.5rem] mt-2'></div>
                                <div className='animate-pulse bg-palette-dark-100 rounded-lg w-full h-[1.5rem] mt-2'></div>
                                <div className='animate-pulse bg-palette-dark-100 rounded-lg w-[75%] h-[1.5rem] mt-2'></div>
                            </>
                        }
                        <div className='sm:flex hidden flex-row justify-center items-center mt-6'>
                            <div className='animate-pulse bg-palette-dark-100 w-[4rem] h-[4rem] border rounded-full border-palette-dark-100'></div>
                            <div className='ml-6'>
                                <div className='animate-pulse bg-palette-dark-100 rounded-lg w-[8rem] h-[1.5rem]'></div>
                                <div className='animate-pulse bg-palette-dark-100 rounded-lg w-[12rem] h-[1.5rem] mt-2'></div>            
                            </div>
                        </div>
                        <div className='sm:hidden flex flex-col justify-center items-center w-full mt-6'>
                            <div className='animate-pulse bg-palette-dark-100 w-[4rem] h-[4rem] border rounded-full border-palette-dark-100'></div>
                                <div className='animate-pulse bg-palette-dark-100 rounded-lg w-[8rem] h-[1.5rem] mt-4'></div>
                                <div className='animate-pulse bg-palette-dark-100 rounded-lg w-[12rem] h-[1.5rem] mt-2'></div>    
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default TestimonialsSkeleton;   