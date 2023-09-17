import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ImageCProps {
  width?: number;
  height?: number;
  src?: string;
  className?: string;
  opacity?: number;
}

const ImageC: React.FC<ImageCProps> = ({ width, height, src = '', className = '', opacity = 1 }) => {
  return (
    <>
      {src != '' && src != undefined ? 
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: opacity }} transition={{ delay: (Math.floor(Math.random() * 3) + 3) / 10, duration: 0.3 }}>
          <Image placeholder='empty' width={width} height={height} alt='' src={src} className={'transition-all ease-in-out duration-300 pointer-events-none select-none ' + className} />
        </motion.div>
      : null}
    </>
  );
};

export default ImageC;