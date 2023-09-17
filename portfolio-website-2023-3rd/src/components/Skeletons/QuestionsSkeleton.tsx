import React, { useEffect, useState, useRef } from 'react';
import { Question } from '@prisma/client';
import { motion } from 'framer-motion';

const QuestionsSkeleton = () => {
    const [questions, setMemories] = useState<Question[] | []>([]);
    const questionsAdded = useRef(false);
  
    useEffect(() => {
        if(questionsAdded.current === false) {
            let questionsTemp: Question[] = [];
            for(let i = 0; i < 5; i++) {
                questionsTemp.push({
                    id: questions.length.toString(),
                    question: '',
                    answer: '',
                    createdAt: new Date()
                } as Question);

                setMemories(questionsTemp);
            }            
        }

        return() => {
            questionsAdded.current = true;
        }
    }, [questions.length]);

  return (
    <motion.div key='questionsSkeleton' exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className='flex flex-col justify-start items-center w-full'>
        <div className='animate-pulse bg-palette-dark-100 rounded-lg w-[8rem] h-[1.5rem]'></div>
        <div className='animate-pulse bg-palette-dark-100 rounded-lg w-[12rem] h-[1.5rem] mt-2'></div>
        <div className='flex flex-col justify-center items-center w-full mt-[2.5rem]'>                 
            {questions.map((question: Question, index: number) => (
                <div key={index} className={'flex flex-col justify-center items-center w-full md:pt-2 md:pb-2 sm:pt-4 sm:pb-4 pt-4 pb-4 ' + (index < questions.length - 1 && 'border-b border-palette-dark-100')}>
                    <div className='flex flex-row justify-between items-center w-full md:h-[3.5rem] sm:h-auto h-auto sm:min-h-[3.5rem] min-h-[3.5rem] select-none rounded-2xl pt-2 pb-2 sm:pr-0 pr-4'>
                        <div className='animate-pulse bg-palette-dark-100 rounded-lg md:w-full sm:w-[24.5rem] w-full h-[1.5rem]'></div> 
                    </div>
                </div>
            ))}
        </div>
    </motion.div>
  );
};

export default QuestionsSkeleton;   