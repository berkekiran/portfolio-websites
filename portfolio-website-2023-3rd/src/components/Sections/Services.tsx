import React, { useEffect, useState, useRef } from 'react';
import { Service } from '@prisma/client';
import axios from 'axios';
import Container from '@/components/Layout/Container';
import Wrapper from '@/components/Layout/Wrapper';
import TextC from '@/components/common/TextC';
import ImageC from '@/components/common/ImageC';
import ServicesSkeleton from '@/components/Skeletons/ServicesSkeleton';

const Services = () => {
    const [services, setServices] = useState<Service[] | []>([]);
    const servicesFetched = useRef(false);
  
    useEffect(() => {
        if(servicesFetched.current === false) {
            const getServices = async () => {
                const servicesRawData = await axios.get('/api/services');
                
                setTimeout(() => {
                    setServices(servicesRawData.data);
                }, 300);
            };

            getServices();
        }

        return() => {
            servicesFetched.current = true;
        }
    }, []);

    return (
        <Container className='flex-col justify-center items-center sm:pt-[2.875rem] sm:pb-[2.875rem] pt-[1.875rem] pb-[1.875rem]'>
            <Wrapper className='flex-col sm:w-[92.5%] w-[85%] justify-center items-center'>
                {services.length > 0 ? 
                    <>
                        <TextC className='text-palette-light-200 sm:text-xl text-base'>Services</TextC>
                        <TextC className='text-center lg:w-[55%] md:w-[80%] sm:w-[90%] w-[85%] sm:text-base text-sm'>I provide a wide range of services to help you build innovative and secure blockchain-based applications and games</TextC>
                        <div className='flex md:flex-row sm:flex-col flex-col flex-wrap lg:justify-between md:justify-center sm:justify-center justify-center items-center w-full mt-[2.5rem]'>
                            {services.map((service: Service, index: number) => (
                                <div key={index} className={'md:h-[20rem] ms:h-[18.5rem] md:w-[17.5rem] sm:w-[25rem] w-full p-[1.75rem] rounded-2xl border border-palette-dark-100 transition-allease-in-out duration-300 hover:bg-palette-dark-100 hover:bg-opacity-75 hover:border-palette-dark hover:scale-105 ' + 
                                        (index > 1 ? 'lg:mt-0 md:mt-[2rem] sm:mt-[2rem] mt-[2rem] ' : (index == 1 && 'md:mt-0 sm:mt-[2rem] mt-[2rem] ')) + ((index + 1) % 2 != 0 ? 'lg:0 md:mr-[1rem] sm:mr-0 mr-0' : 'lg:ml-0 lg:mr-[1rem] md:ml-[1rem] sm:ml-0 ml-0')
                                    }
                                >
                                    <ImageC width={128} height={128} src={service.image} className='sm:w-[2rem] sm:h-[2rem] w-[1.75rem] h-[1.75rem]' />
                                    <TextC className='whitespace-nowrap text-palette-light-200 sm:text-base text-sm sm:mt-6 mt-4'>
                                        {service.title}
                                    </TextC>
                                    <TextC className='text-sm mt-2'>
                                        {service.desc}
                                    </TextC>
                                </div>
                            ))}
                        </div>
                    </>
                        :
                    <ServicesSkeleton />
                }
            </Wrapper>
        </Container>
    );
};

export default Services;   