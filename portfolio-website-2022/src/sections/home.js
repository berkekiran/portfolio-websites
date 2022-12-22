import React from 'react';
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpRightFromSquare, faCirclePlay } from "@fortawesome/free-solid-svg-icons"

import homeStyles from '../styles/sections/home.module.css';
 
function Home() {
    return (
        <>
            <div className={homeStyles.homeContainer}>
                <div className={homeStyles.homeHeader}>
                    <div>
                        <motion.h1
                            initial={{ 
                                opacity: 0,
                                y: 32
                            }}
                            animate={{ 
                                opacity: 1,
                                y: 0
                            }}
                            transition={{ duration: 0.2, delay: 0.3 }}
                        >
                            Game,
                        </motion.h1>
                        <motion.h1
                            initial={{ 
                                opacity: 0,
                                y: 32
                            }}
                            animate={{ 
                                opacity: 1,
                                y: 0
                            }}
                            transition={{ duration: 0.2, delay: 0.35 }}
                        >
                            Web and
                        </motion.h1>
                        <motion.h1
                            initial={{ 
                                opacity: 0,
                                y: 32
                            }}
                            animate={{ 
                                opacity: 1,
                                y: 0
                            }}
                            transition={{ duration: 0.2, delay: 0.4 }}
                        >
                            Blockchain
                        </motion.h1>
                        <motion.h1
                            initial={{ 
                                opacity: 0,
                                y: 32
                            }}
                            animate={{ 
                                opacity: 1,
                                y: 0
                            }}
                            transition={{ duration: 0.2, delay: 0.45 }}
                        >
                            Developer
                        </motion.h1>
                        <motion.h1
                            initial={{ 
                                opacity: 0,
                                y: 32
                            }}
                            animate={{ 
                                opacity: 1,
                                y: 0
                            }}
                            transition={{ duration: 0.2, delay: 0.5 }}
                            className={homeStyles.company}
                        >
                            - Noble Games, DXB
                        </motion.h1>
                    </div>
                    <motion.div 
                        initial={{ 
                            opacity: 0
                        }}
                        animate={{ 
                            opacity: 1
                        }}
                        transition={{ duration: 0.2, delay: 0.55 }}
                        className={homeStyles.grid}
                    >
                        <ul className={homeStyles.gridRow}>
                            <li className={homeStyles.gridBox}>
                                <img className={homeStyles.plusIcon + " " + homeStyles.plusIconTopLeft} src='assets/technologies/plus.svg'/>
                                <img className={homeStyles.plusIcon + " " + homeStyles.plusIconTopRight} src='assets/technologies/plus.svg'/> 
                                <img className={homeStyles.plusIcon + " " + homeStyles.plusIconBottomLeft} src='assets/technologies/plus.svg'/>
                                <img className={homeStyles.plusIcon + " " + homeStyles.plusIconBottomRight} src='assets/technologies/plus.svg'/>
                                <a href='https://ethereum.org/en/' target='_blank' className={homeStyles.techIcon}>
                                    <img src='assets/technologies/ethereum.svg'/>
                                </a>
                            </li>
                            <li className={homeStyles.gridBox}>
                                <a href='https://www.unrealengine.com/en-US' target='_blank' className={homeStyles.techIcon}>
                                    <img src='assets/technologies/unrealengine.svg'/>
                                </a>
                            </li>
                            <li className={homeStyles.gridBox}>
                                <img className={homeStyles.plusIcon + " " + homeStyles.plusIconTopLeft} src='assets/technologies/plus.svg'/>
                                <img className={homeStyles.plusIcon + " " + homeStyles.plusIconTopRight} src='assets/technologies/plus.svg'/> 
                                <a href='https://reactjs.org/' target='_blank' className={homeStyles.techIcon}>
                                    <img src='assets/technologies/reactjs.svg'/>
                                </a>
                            </li>
                        </ul>
                        <ul className={homeStyles.gridRow}>
                            <li className={homeStyles.gridBox}>
                                <img className={homeStyles.plusIcon + " " + homeStyles.plusIconBottomLeft} src='assets/technologies/plus.svg'/>
                                <img className={homeStyles.plusIcon + " " + homeStyles.plusIconBottomRight} src='assets/technologies/plus.svg'/>
                                <a href='https://unity.com/' target='_blank' className={homeStyles.techIcon}>
                                    <img src='assets/technologies/unityengine.svg'/>
                                </a>
                            </li>
                            <li className={homeStyles.gridBox}>
                                <a href='https://www.avax.network/' target='_blank' className={homeStyles.techIcon}>
                                    <img src='assets/technologies/avalanche.svg'/>
                                </a>
                            </li>
                            <li className={homeStyles.gridBox}>
                                <img className={homeStyles.plusIcon + " " + homeStyles.plusIconTopLeft} src='assets/technologies/plus.svg'/>
                                <img className={homeStyles.plusIcon + " " + homeStyles.plusIconTopRight} src='assets/technologies/plus.svg'/> 
                                <img className={homeStyles.plusIcon + " " + homeStyles.plusIconBottomLeft} src='assets/technologies/plus.svg'/>
                                <img className={homeStyles.plusIcon + " " + homeStyles.plusIconBottomRight} src='assets/technologies/plus.svg'/>
                                <a href='https://soliditylang.org/' target='_blank' className={homeStyles.techIcon}>
                                    <img src='assets/technologies/solidity.svg'/>
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                </div>
                <div className={homeStyles.selectedProjectLinks}>
                    <motion.a
                        initial={{ 
                            opacity: 0,
                            y: 24
                        }}
                        animate={{ 
                            opacity: 1,
                            y: 0
                        }}
                        transition={{ duration: 0.2, delay: 0.6 }}
                        className={homeStyles.redBackground} 
                        href='https://painttoearn.io/' 
                        target='_blank'
                    >
                        <span>
                            Visit Paint to Earn
                        </span>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
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
                        transition={{ duration: 0.2, delay: 0.65 }}
                        href='https://www.youtube.com/watch?v=BEODs-I3Hc8' 
                        target='_blank'
                    >
                        <span>
                            Watch Souls of the Fallen God 4K Trailer
                        </span>
                        <FontAwesomeIcon icon={faCirclePlay} />
                    </motion.a>
                </div>
            </div>
        </>
    );
}

export default Home;
