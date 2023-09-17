import React, { useEffect, useState, useRef } from 'react';
import { Client } from '@prisma/client';
import axios from 'axios';
import Container from '@/components/Layout/Container';
import Wrapper from '@/components/Layout/Wrapper';
import TextC from '@/components/common/TextC';
import ImageC from '@/components/common/ImageC';
import ClientsSkeleton from '@/components/Skeletons/ClientsSkeleton';

const Clients = () => {
    const [clients, setClients] = useState<Client[] | []>([]);
    const clientsFetched = useRef(false);
  
    useEffect(() => {
        if(clientsFetched.current === false) {
            const getClients = async () => {
                const clientsRawData = await axios.get('/api/clients');
                
                setTimeout(() => {
                    setClients(clientsRawData.data);
                }, 300);
            };

            getClients();
        }

        return() => {
            clientsFetched.current = true;
        }
    }, []);

    return (
        <Container className='flex-col justify-center items-center sm:pt-[2.875rem] pt-[1.875rem] lg:pb-[2.875rem] md:pb-[0.875rem] sm:pb-[0.875rem] -pb-[0.125rem]'>
            <Wrapper className='flex-col sm:w-[92.5%] w-[85%] justify-center items-center'>
                {clients.length > 0 ? 
                    <>
                        <TextC className='text-palette-light-200 sm:text-xl text-sm'>Proudly Worked With</TextC>
                        <TextC className='text-center md:w-auto sm:w-[90%] w-[85%]'>I collaborate with innovative brands and startups to create the future.</TextC>
                        <div className='flex flex-row flex-wrap lg:justify-between md:justify-center sm:justify-center justify-center items-center lg:w-[90%] md:w-full sm:w-full w-full mt-[2.5rem]'>                 
                            {clients.map((client: Client, index: number) => (
                                <ImageC key={index} width={256} height={256} src={client.image} className='sm:h-[4rem] sm:w-[8rem] h-[3.25rem] w-[6.75rem] lg:mr-0 md:mr-[1rem] sm:mr-[1rem] mr-[0.25rem] lg:ml-0 md:ml-[1rem] sm:ml-[1rem] ml-[0.25rem] lg:mb-0 md:mb-[2rem] sm:mb-[2rem] mb-[2rem]'/>
                            ))}
                        </div>
                    </>
                        :
                    <ClientsSkeleton />
                }
            </Wrapper>
        </Container>
    );
};

export default Clients;   