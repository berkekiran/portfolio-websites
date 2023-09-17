import React, { useEffect, useState, useRef } from 'react';
import { Project } from '@prisma/client';
import axios from 'axios';
import { useSettingsContext } from '@/context/SettingsContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Container from '@/components/Layout/Container';
import Wrapper from '@/components/Layout/Wrapper';
import LinkC from '@/components/common/LinkC';
import ImageC from '@/components/common/ImageC';
import TextC from '@/components/common/TextC';
import FeaturedSkeleton from '@/components/Skeletons/FeaturedSkeleton';

const Featured = () => {
    const { settings } = useSettingsContext();
    const [projects, setProjects] = useState<Project[] | []>([]);
    const projectsFetched = useRef(false);
  
    useEffect(() => {
        if(projectsFetched.current === false) {
            const getProjects = async () => {
                const projectsRawData = await axios.get('/api/projects');
                
                setTimeout(() => {
                    setProjects(projectsRawData.data);
                }, 300);
            };

            getProjects();
        }

        return() => {
            projectsFetched.current = true;
        }
    }, []);

    return (
        <Container className='flex-col justify-center items-center pt-0 sm:pb-[2.875rem] pb-[1.875rem]'>
            <Wrapper className='flex-col sm:w-[92.5%] w-[85%] justify-center items-center'>
                {settings && projects.length > 0 ? 
                    <>
                        <div className='flex flex-col justify-center items-center w-full'>
                            {projects.length > 0 && projects.map((project: Project, index: number) => (
                                (index < 2 ? (
                                    <LinkC key={index} href={project.link} className={'relative flex flex-col justify-start items-start overflow-hidden lg:h-[27.5rem] md:h-[22.5rem] sm:h-[17.5rem] h-[17.5rem] w-full pl-[1.75rem] pr-[1.75rem] rounded-2xl border border-palette-dark-100 group hover:bg-palette-dark-100 hover:bg-opacity-75 hover:border-palette-dark hover:scale-105 ' + (index == 1 && 'sm:mt-10 mt-6')}>
                                        <div className='flex md:flex-row sm:flex-col flex-col justify-between md:items-center sm:items-start items-start w-full mt-[1.75rem]'>
                                            <div className='lg:w-auto md:w-[22.5rem] sm:w-full w-full'>
                                                <TextC className='text-palette-light-200 sm:text-base text-sm'>{project.name}</TextC>
                                                <TextC className='sm:text-base text-sm'>{project.desc}</TextC>
                                            </div>
                                            <TextC className='flex flex-row justify-center items-center md:mt-0 sm:mt-[1.25rem] mt-[1.25rem] sm:text-base text-sm text-palette-light-200'>
                                                {project.linkLabel == 'none' ? 'View Project' : project.linkLabel}
                                                <FontAwesomeIcon icon={faChevronRight} className={'w-[0.75rem] h-[0.75rem] ml-[0.5rem]'} />
                                            </TextC>
                                        </div>
                                        <ImageC width={1920} height={1080} src={project.image} className='w-full group-hover:scale-[1.025] mt-[1.75rem] group-hover:mt-[1.25rem]'/>
                                    </LinkC>
                                ) : 
                                    <div key={index} className={'flex md:flex-row sm:flex-col flex-col justify-between items-center text-sm lg:h-[5rem] lg:pt-0 md:pt-4 sm:pt-4 pt-4 lg:pb-0 md:pb-4 sm:pb-8 pb-8 w-full ' + (index >= 2 ? (index == 2 ? 'mt-6 ' : 'md:mt-2 sm:mt-2 mt-2 ') : '') + (index < (projects.length - 1) ? 'border-b border-palette-dark-100' : '')}>
                                        <div className='flex lg:flex-row md:flex-col sm:flex-col flex-col lg:justify-start md:justify-start sm:justify-start justify-start lg:items-center md:items-start sm:items-start items-start lg:w-auto md:w-[22.5rem] sm:w-[23.5rem] w-full'>
                                            <div className='flex flex-row justify-start items-center w-[13.25rem]'>
                                                <ImageC width={128} height={128} src={project.image} className='w-[2.5rem] h-[2.5rem] rounded-full'/>
                                                <TextC className='text-palette-light-200 ml-[1.5rem]'>{project.name}</TextC>
                                            </div>
                                            <TextC className='lg:ml-[1.25rem] md:ml-[4rem] sm:ml-[4rem] ml-[4rem]'>{project.desc}</TextC>
                                        </div>
                                        <LinkC href={project.link} className='flex flex-row justify-center items-center md:mt-0 sm:mt-6 mt-6 pt-[0.5rem] pb-[0.5rem] pl-[1.25rem] pr-[1.25rem] rounded-2xl border border-palette-dark-100 text-palette-light-200 hover:bg-palette-dark-100 hover:bg-opacity-75 hover:border-palette-dark hover:scale-105'>
                                            {project.linkLabel == 'none' ? 'View Project' : project.linkLabel}
                                            <FontAwesomeIcon icon={faChevronRight} className={'w-[0.75rem] h-[0.75rem] ml-[0.5rem]'} />
                                        </LinkC>
                                    </div>
                                )
                            ))}
                            <LinkC href={settings?.github} className='flex flex-row justify-center items-center mt-8 pt-[1rem] pb-[1rem] sm:pl-[2.25rem] sm:pr-[2.25rem] pl-[1.5rem] pr-[1.5rem] rounded-2xl text-palette-light-200 sm:text-base text-sm bg-[#4120F3] hover:bg-[#5638F5] hover:scale-105'>
                                View All Projects on Github
                                <FontAwesomeIcon icon={faGithub} className='sm:w-[1.5rem] sm:h-[1.5rem] w-[1.25rem] h-[1.25rem] ml-[0.75rem]' />
                            </LinkC>
                        </div>
                    </>
                        :
                    <FeaturedSkeleton />
                }
            </Wrapper>
        </Container>
    );
};

export default Featured;   