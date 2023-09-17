import React, { ReactNode } from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';

interface ButtonCProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  opacity?: number;
}

const ButtonC: React.FC<ButtonCProps> = ({ children, className = '', opacity = 1, ...attributes }) => {
  return (
    <>
      {children != '' && children != undefined ? 
        <motion.button initial={{ opacity: 0 }} animate={{ opacity: opacity }} transition={{ delay: (Math.floor(Math.random() * 3) + 3) / 10, duration: 0.3 }} className={'font-base text-base leading-[1.75rem] tracking-wider transition-all ease-in-out duration-300 select-none hover:cursor-pointer ' + className} {...attributes as HTMLMotionProps<'button'>}>
          {children}
        </motion.button>
      : null}
    </>
  );
};

export default ButtonC;