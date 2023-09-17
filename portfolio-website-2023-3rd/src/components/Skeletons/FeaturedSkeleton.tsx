import React, { useEffect, useState, useRef } from 'react';
import { Project } from '@prisma/client';
import { motion } from 'framer-motion';

const FeaturedSkeleton = () => {
    const [projects, setProjects] = useState<Project[] | []>([]);
    const projectsAdded = useRef(false);
  
    useEffect(() => {
        if(projectsAdded.current === false) {
            let projectsTemp: Project[] = [];
            for(let i = 0; i < 5; i++) {
                projectsTemp.push({
                    id: projects.length.toString(),
                    name: '',
                    desc: '',
                    image: '',
                    link: '',
                    linkLabel: '',
                    createdAt: new Date()
                } as Project);

                setProjects(projectsTemp);
            }            
        }

        return() => {
            projectsAdded.current = true;
        }
    }, [projects.length]);

    return (
        <motion.div key='featuredSkeleton' exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className='flex flex-col justify-center items-center w-full'>
            {projects.length > 0 ?
                <>
                    {projects.map((project: Project, index: number) => (
                        index < 2 ? (
                            <div key={index} className={'relative flex flex-col justify-start items-start overflow-hidden lg:h-[27.5rem] md:h-[22.5rem] sm:h-[17.5rem] h-[17.5rem] w-full pl-[1.75rem] pr-[1.75rem] rounded-2xl border border-palette-dark-100 group ' + (index == 1 && 'sm:mt-10 mt-6')}>
                                <div className='flex md:flex-row sm:flex-col flex-col justify-between md:items-center sm:items-start items-start w-full mt-[1.75rem]'>
                                    <div className='lg:w-auto md:w-[22.5rem] sm:w-full w-full'>
                                        <div className='animate-pulse bg-palette-dark-100 rounded-lg w-[8rem] h-[1.5rem]'></div>
                                        <div className='animate-pulse bg-palette-dark-100 rounded-lg w-[12rem] h-[1.5rem] mt-2'></div>
                                    </div>
                                    <div className='animate-pulse bg-palette-dark-100 rounded-lg w-[8rem] h-[1.5rem] flex flex-row justify-center items-center md:mt-0 sm:mt-[1.25rem] mt-[1.25rem]'></div>
                                </div>
                                <div className='animate-pulse bg-palette-dark-100 rounded-lg w-full mt-[1.75rem] aspect-video'></div>
                            </div>
                        ) : 
                            <div key={index} className={'flex md:flex-row sm:flex-col flex-col justify-between items-center lg:h-[5rem] lg:pt-0 md:pt-4 sm:pt-4 pt-4 lg:pb-0 md:pb-4 sm:pb-8 pb-8 w-full ' + (index >= 2 ? (index == 2 ? 'mt-6 ' : 'md:mt-2 sm:mt-2 mt-2 ') : '') + (index < (projects.length - 1) ? 'border-b border-palette-dark-100' : '')}>
                                <div className='flex lg:flex-row md:flex-col sm:flex-col flex-col lg:justify-start md:justify-start sm:justify-start justify-start lg:items-center md:items-start sm:items-start items-start lg:w-full md:w-[22.5rem] sm:w-[23.5rem] w-full'>
                                    <div className='flex flex-row justify-start items-center w-[13.25rem]'>
                                        <div className='animate-pulse bg-palette-dark-100 w-[2.5rem] h-[2.5rem] rounded-full'></div>
                                        <div className='animate-pulse bg-palette-dark-100 rounded-lg w-[8rem] h-[1.5rem] ml-6'></div>
                                    </div>
                                    <div className='animate-pulse bg-palette-dark-100 rounded-lg w-[62.5%] h-[1.5rem] lg:ml-[1.25rem] md:ml-[4rem] sm:ml-[4rem] ml-[4rem]'></div>
                                </div>
                                <div className='animate-pulse bg-palette-dark-100 rounded-lg w-[10rem] h-[2.5rem] flex flex-row justify-center items-center md:mt-0 sm:mt-6 mt-6 pt-[0.5rem] pb-[0.5rem] pl-[1.25rem] pr-[1.25rem border border-palette-dark-100'></div>
                            </div>
                        )
                    )}
                    <div className='animate-pulse bg-palette-dark-100 rounded-lg w-[12.5rem] h-[3.5rem] flex flex-row justify-center items-center mt-8 pt-[1rem] pb-[1rem] sm:pl-[2.25rem] sm:pr-[2.25rem] pl-[1.5rem] pr-[1.5rem]'></div>
                </>
            : null}
        </motion.div>
    );
};

export default FeaturedSkeleton;   