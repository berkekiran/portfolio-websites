import React, { useEffect, useState, useRef } from 'react';
import { Testimonial } from '@prisma/client';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import Container from '@/components/Layout/Container';
import Wrapper from '@/components/Layout/Wrapper';
import TextC from '@/components/common/TextC';
import ImageC from '@/components/common/ImageC';
import TestimonialsSkeleton from '@/components/Skeletons/TestimonialsSkeleton';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState<Testimonial[] | []>([]);
    const testimonialsFetched = useRef(false);
  
    useEffect(() => {
        if(testimonialsFetched.current === false) {
            const getTestimonials = async () => {
                const testimonialsRawData = await axios.get('/api/testimonials');
                
                setTimeout(() => {
                    setTestimonials(testimonialsRawData.data);
                }, 300);
            };

            getTestimonials();
        }

        return() => {
            testimonialsFetched.current = true;
        }
    }, []);

    return (
        <Container className='flex-col justify-center items-center sm:pt-[2.875rem] sm:pb-[2.875rem] pt-[1.875rem] pb-[1.875rem]'>
            <Wrapper className='flex-col sm:w-[92.5%] w-[85%] justify-center items-center'>
                {testimonials.length > 0 ? 
                    <>
                        <TextC className='text-palette-light-200 sm:text-xl text-sm'>Kind Words From People</TextC>
                        <TextC className='text-center lg:w-[55%] md:w-[80%] sm:w-[90%] w-[85%]'>Testimonials from satisfied testimonials highlight the positive impact of my work.</TextC>
                        <div className='flex flex-row flex-wrap lg:justify-between md:justify-center sm:justify-center justify-center items-center w-full mt-[2.5rem]'>
                            {testimonials.map((testimonial: Testimonial, index: number) => (
                                <div key={index} className={'flex flex-col justify-start items-start p-[1.75rem] text-sm rounded-2xl border border-palette-dark-100 transition-allease-in-out duration-300 hover:bg-palette-dark-100 hover:bg-opacity-75 hover:border-palette-dark hover:scale-105 ' + 
                                        (index == (testimonials.length - 1) && (index + 1) % 2 != 0 ? 'lg:h-[12.75rem] md:h-[16.25rem] sm:h-[16.25rem] h-auto lg:w-full md:w-[28.75rem] sm:w-[28.75rem] w-full ' : ('sm:h-[16.25rem] h-auto lg:w-[26.75rem] md:w-[28.75rem] sm:w-[28.75rem] w-full ')) +
                                        (index > 0 ? (index > 1 ? 'lg:mt-[2rem] md:mt-[2rem] sm:mt-[2rem] mt-[2rem]' : 'lg:mt-0 md:mt-[2rem] sm:mt-[2rem] mt-[2rem]') : '')
                                    }
                                >
                                    <div className='sm:text-base text-sm'>
                                        <FontAwesomeIcon icon={faQuoteLeft} className='sm:w-[1.125rem] sm:h-[1.125rem] w-[0.875rem] h-[0.875rem] mr-2 -translate-y-1 text-palette-light-200'/>
                                        {testimonial.testimonial}
                                        <FontAwesomeIcon icon={faQuoteRight} className='sm:w-[1.125rem] sm:h-[1.125rem] w-[0.875rem] h-[0.875rem] ml-2 -translate-y-1 text-palette-light-200'/>
                                    </div>
                                    <div className='sm:flex hidden flex-row justify-center items-center mt-6'>
                                        <ImageC width={128} height={128} src={testimonial.image} className='w-[4rem] h-[4rem] border rounded-full border-palette-dark-100'/>
                                        <div className='ml-6'>
                                            <TextC className='text-palette-light-200'>
                                                {testimonial.name}
                                            </TextC>
                                            <TextC className='md:whitespace-normal sm:whitespace-nowrap'>
                                                {testimonial.role}
                                            </TextC>
                                        </div>
                                    </div>
                                    <div className='sm:hidden flex flex-col justify-center items-center w-full mt-6'>
                                        <ImageC width={128} height={128} src={testimonial.image} className='w-[4rem] h-[4rem] border rounded-full border-palette-dark-100'/>
                                        <TextC className='text-sm text-palette-light-200 mt-4'>
                                            {testimonial.name}
                                        </TextC>
                                        <TextC className='text-center'>
                                            {testimonial.role}
                                        </TextC>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                        :
                    <TestimonialsSkeleton />
                }
            </Wrapper>
        </Container>
    );
};

export default Testimonials;   