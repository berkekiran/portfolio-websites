import React, { useEffect, useState, useRef } from 'react';
import { Service } from '@prisma/client';
import { motion } from 'framer-motion';

const ServicesSkeleton = () => {
    const [services, setServices] = useState<Service[] | []>([]);
    const servicesAdded = useRef(false);
  
    useEffect(() => {
        if(servicesAdded.current === false) {
            let servicesTemp: Service[] = [];
            for(let i = 0; i < 3; i++) {
                servicesTemp.push({
                    id: services.length.toString(),
                    title: '',
                    desc: '',
                    image: '',
                    createdAt: new Date()
                } as Service);

                setServices(servicesTemp);
            }            
        }

        return() => {
            servicesAdded.current = true;
        }
    }, [services.length]);

    return (
        <motion.div key='servicesSkeleton' exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className='flex flex-col justify-start items-center w-full'>
            <div className='animate-pulse bg-palette-dark-100 rounded-lg w-[8rem] h-[1.5rem]'></div>
            <div className='animate-pulse bg-palette-dark-100 rounded-lg w-[12rem] h-[1.5rem] mt-2'></div>
            <div className='flex md:flex-row sm:flex-col flex-col flex-wrap lg:justify-between md:justify-center sm:justify-center justify-center items-center w-full mt-[2.5rem]'>
                {services.map((service: Service, index: number) => (
                    <div key={index} className={'md:h-[20rem] ms:h-[18.5rem] md:w-[17.5rem] sm:w-[25rem] w-full p-[1.75rem] rounded-2xl border border-palette-dark-100 transition-allease-in-out duration-300 ' + 
                            (index > 1 ? 'lg:mt-0 md:mt-[2rem] sm:mt-[2rem] mt-[2rem] ' : (index == 1 && 'md:mt-0 sm:mt-[2rem] mt-[2rem] ')) + ((index + 1) % 2 != 0 ? 'lg:0 md:mr-[1rem] sm:mr-0 mr-0' : 'lg:ml-0 lg:mr-[1rem] md:ml-[1rem] sm:ml-0 ml-0')
                        }
                    >
                        <div className='animate-pulse bg-palette-dark-100 rounded-lg sm:w-[2rem] sm:h-[2rem] w-[1.75rem] h-[1.75rem]'></div>
                        <div className='animate-pulse bg-palette-dark-100 rounded-lg w-[8rem] h-[1.5rem] mt-2'></div>
                        <div className='animate-pulse bg-palette-dark-100 rounded-lg w-full h-[1.5rem] mt-2'></div>
                        <div className='animate-pulse bg-palette-dark-100 rounded-lg w-full h-[1.5rem] mt-2'></div>
                        <div className='animate-pulse bg-palette-dark-100 rounded-lg w-full h-[1.5rem] mt-2'></div>
                        <div className='animate-pulse bg-palette-dark-100 rounded-lg w-full h-[1.5rem] mt-2'></div>
                        <div className='animate-pulse bg-palette-dark-100 rounded-lg w-full h-[1.5rem] mt-2'></div>
                        <div className='animate-pulse bg-palette-dark-100 rounded-lg w-[75%] h-[1.5rem] mt-2'></div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default ServicesSkeleton;   