import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface TextCProps {
  children: ReactNode;
  className?: string;
  opacity?: number;
}

const TextC: React.FC<TextCProps> = ({ children, className = '', opacity = 1 }) => {
  return (
    <>
      {children != '' && children != undefined ? 
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: opacity }} transition={{ delay: (Math.floor(Math.random() * 3) + 3) / 10, duration: 0.3 }} className={'transition-all ease-in-out duration-300 ' + className}>
          {children}
        </motion.p>      
      : null}
    </>
  );
};

export default TextC;