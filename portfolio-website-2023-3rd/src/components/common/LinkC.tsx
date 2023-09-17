import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface LinkCProps {
  children: ReactNode;
  href?: string;
  className?: string;
  opacity?: number;
}

const LinkC: React.FC<LinkCProps> = ({ children, href = '', className = '', opacity = 1 }) => {
  return (
    <>
      {children != '' && children != undefined ? 
        <motion.a href={href} target='_blank' initial={{ opacity: 0 }} animate={{ opacity: opacity }} transition={{ delay: (Math.floor(Math.random() * 3) + 3) / 10, duration: 0.3 }} className={'relative transition-all ease-in-out duration-300 select-none hover:cursor-pointer ' + className}>
          {children}
        </motion.a>
      : null}
    </>
  );
};

export default LinkC;