import React, { useEffect, useState, useRef } from 'react';
import { Client } from '@prisma/client';
import { motion } from 'framer-motion';

const ClientsSkeleton = () => {
    const [clients, setClients] = useState<Client[] | []>([]);
    const clientsAdded = useRef(false);
  
    useEffect(() => {
        if(clientsAdded.current === false) {
            let clientsTemp: Client[] = [];
            for(let i = 0; i < 5; i++) {
                clientsTemp.push({
                    id: clients.length.toString(),
                    image: '',
                    createdAt: new Date()
                } as Client);

                setClients(clientsTemp);
            }            
        }

        return() => {
            clientsAdded.current = true;
        }
    }, [clients.length]);

    return (
        <motion.div key='clientsSkeleton' exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className='flex flex-col justify-start items-center w-full'>
            <div className='animate-pulse bg-palette-dark-100 rounded-lg w-[8rem] h-[1.5rem]'></div>
            <div className='animate-pulse bg-palette-dark-100 rounded-lg w-[12rem] h-[1.5rem] mt-2'></div>
            <div className='flex flex-row flex-wrap lg:justify-between md:justify-center sm:justify-center justify-center items-center lg:w-[90%] md:w-full sm:w-full w-full mt-[2.5rem]'>                 
                {clients.map((client: Client, index: number) => (
                    <div key={index} className='animate-pulse bg-palette-dark-100 rounded-lg sm:h-[4rem] sm:w-[8rem] h-[3.25rem] w-[6.75rem] lg:mr-0 md:mr-[1rem] sm:mr-[1rem] mr-[0.25rem] lg:ml-0 md:ml-[1rem] sm:ml-[1rem] ml-[0.25rem] lg:mb-0 md:mb-[2rem] sm:mb-[2rem] mb-[2rem]'></div>
                ))}
            </div>
        </motion.div>
    );
};

export default ClientsSkeleton;   