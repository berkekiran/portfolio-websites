import React from "react";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons"

import footerStyles from '../styles/sections/footer.module.css';

const Footer = () => {
    
    return (
        <div className={footerStyles.footerContainer}>
            <div className={footerStyles.infoText}>
                <motion.p
                    initial={{ 
                        opacity: 0,
                        y: 24
                    }}
                    animate={{ 
                        opacity: 1,
                        y: 0
                    }}
                    transition={{ duration: 0.2, delay: 0.7 }}
                >
                    Do you wanna develop a new web3 project?
                </motion.p>
                <motion.p
                    initial={{ 
                        opacity: 0,
                        y: 24
                    }}
                    animate={{ 
                        opacity: 1,
                        y: 0
                    }}
                    transition={{ duration: 0.2, delay: 0.75 }}
                >
                    Feel free to reach out!
                </motion.p>
            </div>
            <div className={footerStyles.socialMediaLinks}>
                <motion.a
                    initial={{ 
                        opacity: 0,
                        y: 24
                    }}
                    animate={{ 
                        opacity: 1,
                        y: 0
                    }}
                    transition={{ duration: 0.2, delay: 0.8 }}
                    href='https://www.github.com/berkekiran' 
                    target='_blank'
                >
                    <FontAwesomeIcon icon={faGithub} />
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
                    transition={{ duration: 0.2, delay: 0.85 }}
                    href='https://www.twitter.com/berkekiraneth/' 
                    target='_blank'
                >
                    <FontAwesomeIcon icon={faTwitter} />
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
                    transition={{ duration: 0.2, delay: 0.9 }}
                    href='https://www.linkedin.com/in/berkekiran/' 
                    target='_blank'
                >
                    <FontAwesomeIcon icon={faLinkedin} />
                </motion.a>
            </div>
        </div>
    )
}

export default Footer;