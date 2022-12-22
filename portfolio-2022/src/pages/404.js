import Head from 'next/head';
import React from 'react';
import { motion } from "framer-motion";

import customErrorPageStyles from '../styles/pages/customErrorPage.module.css';

const Custom404 = () => {

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={customErrorPageStyles.container}
    >
        <Head>
          <title>404 - Page Not Found</title>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="author" content="Berke Kiran" />
          <meta name="description" content="Hi! I'm Berke Kiran. Game, web and blockchain developer. Do you wanna develop a new web3 project? Feel free to reach out!" />
          <meta name="keywords" content="berke kiran, berke kıran, Berke Kiran, Berke KIRAN, web, web2, web3, developer, web developer, web3 developer, blockchain, blockchain developer, ethereum, avalanche, binance smart chain, near protocol, game, game developer, mobile game developer, blockchain game developer, pc game developer, 3d, 3d art, 3d artist, 3d character artist" />
          <link rel="apple-touch-icon" sizes="180x180" href="assets/favicons/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="assets/favicons/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="assets/favicons/favicon-16x16.png"/>
          <link rel="manifest" href="site.webmanifest"/>
          <meta name="theme-color" content="#f9f9f9" />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
          <link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600&display=swap" rel="stylesheet"/>
        </Head>

        <motion.p
            initial={{ 
                opacity: 0,
                y: 24
            }}
            animate={{ 
                opacity: 1,
                y: 0
            }}
            transition={{ duration: 0.2, delay: 0.25 }}
        >
          404 - Page Not Found
        </motion.p>

        <motion.a
            initial={{ 
                opacity: 0,
                y: 24
            }}
            animate={{ 
                opacity: 1,
                y: 0
            }}
            transition={{ duration: 0.2, delay: 0.375 }}
            href='http://berkekiran.com/'
        >
          Return to Home Page
        </motion.a>
    </motion.div>
  )
}

export default Custom404;
