import React, { useEffect, useState, useRef } from 'react';
import { Question } from '@prisma/client';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Container from '@/components/Layout/Container';
import Wrapper from '@/components/Layout/Wrapper';
import TextC from '@/components/common/TextC';
import ButtonC from '@/components/common/ButtonC';
import QuestionsSkeleton from '@/components/Skeletons/QuestionsSkeleton';

const Questions = () => {
  const [questions, setQuestions] = useState<Question[] | []>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const questionsFetched = useRef(false);

  useEffect(() => {
      if(questionsFetched.current === false) {
          const getQuestions = async () => {
              const questionsRawData = await axios.get('/api/questions');
                
              setTimeout(() => {
                setQuestions(questionsRawData.data);
              }, 300);
          };

          getQuestions();
      }

      return() => {
          questionsFetched.current = true;
      }
  }, []);

  const toggleAccordion = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
      <Container className='flex-col justify-center items-center sm:pt-[2.875rem] sm:pb-[2.875rem] pt-[1.875rem] pb-[1.875rem]'>
          <Wrapper className='flex-col sm:w-[92.5%] w-[85%] justify-center items-center'>
            {questions.length > 0 ? 
              <>
                <TextC className='text-palette-light-200 sm:text-xl text-sm'>Questions & Answers</TextC>
                <TextC className='text-center md:w-auto sm:w-[90%] w-[85%]'>If you have any other questions please get in touch.</TextC>
                <div className='flex flex-col justify-center items-center w-full mt-[2.5rem]'>                 
                    {questions.map((question: Question, index: number) => (
                        <div key={index} className={'flex flex-col justify-center items-center w-full md:pt-2 md:pb-2 sm:pt-4 sm:pb-4 pt-4 pb-4 ' + (index < questions.length - 1 && 'border-b border-palette-dark-100')}>
                            <ButtonC onClick={(e) => {e.preventDefault; toggleAccordion(index);}} className={'flex flex-row justify-between items-center w-full md:h-[3.5rem] sm:h-auto h-auto sm:min-h-[3.5rem] min-h-[3.5rem] select-none rounded-2xl pt-2 pb-2 hover:pl-4 sm:hover:pr-4 sm:pr-0 pr-4 hover:pr-0 hover:bg-palette-dark-100 hover:bg-opacity-75 hover:scale-105 ' + (activeIndex == index ? 'text-palette-light-200' : 'text-palette-base hover:text-palette-light-200')}>
                                <span className='text-left md:w-full sm:w-[24.5rem] w-[85%]'>
                                  {question.question}
                                </span> 
                                <FontAwesomeIcon icon={faAngleDown} className={'transition-all ease-in-out duration-300 w-[1.125rem] h-[1.125rem] ' + (activeIndex == index ? 'rotate-180' : '')}/>
                            </ButtonC>
                            <p className={'text-left transition-all ease-in-out duration-500 select-text sm:w-full w-[85%] ' + (activeIndex == index ? 'z-[0] opacity-100 -translate-y-0 mt-4 pb-4 md:max-h-[20rem] sm:max-h-[50rem] max-h-[100rem]' : 'z-[-1] -translate-y-4 opacity-0 mt-0 pb-0 max-h-0')}>
                              {question.answer}
                            </p>
                        </div>
                    ))}
                </div>
              </>
                :
              <QuestionsSkeleton />
            }
          </Wrapper>
      </Container>
  );
};

export default Questions;   