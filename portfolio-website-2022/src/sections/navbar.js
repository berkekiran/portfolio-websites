import React from 'react';
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHandSpock } from "@fortawesome/free-solid-svg-icons"

import navbarStyles from '../styles/sections/navbar.module.css';

const Navbar = () => {
    return (
        <>
            <div className={navbarStyles.navbar}>
                <motion.a
                    initial={{ 
                        opacity: 0,
                        y: 24
                    }}
                    animate={{ 
                        opacity: 1,
                        y: 0
                    }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                    className={navbarStyles.navbarLogo} 
                    href='https://etherscan.io/address/0x524192ce030d38ad15cfa1b98f19a55af692febd'
                    target='_blank'
                >
                    berkekiran.eth
                </motion.a>
                <motion.a
                    initial={{ 
                        opacity: 0,
                        y: 24
                    }}
                    animate={{ 
                        opacity: 1,
                        y: 0
                    }}
                    transition={{ duration: 0.2, delay: 0.25 }}
                    className={navbarStyles.contactMe} 
                    href='mailto:berkekiranofficial@hotmail.com'
                    target='_blank'
                >
                    <span>
                        Say Hi!
                    </span>
                    <FontAwesomeIcon icon={faHandSpock} />
                </motion.a>
            </div>
        </>
    )
}

export default Navbar;