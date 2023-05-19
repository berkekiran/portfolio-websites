import { motion } from "framer-motion";
import WorkStyle from '../styles/sections/work.module.css';

export default function Work() {
    return (
        <div className="section">
          <div className={WorkStyle.works}>
            <motion.a 
                initial={{ 
                    opacity: 0
                }}
                animate={{ 
                    opacity: 1
                }}
                transition={{ duration: 0.25, delay: 0.525 }}
                href='https://noblegames.medium.com/sneak-peek-to-our-first-game-noble-fighter-59358c76554c' 
                target='_blank' 
                rel='noreferrer' 
                className={WorkStyle.work}
            >
                <img className={WorkStyle.workLink} src='images/global/arrow.png'/>
                <img className={WorkStyle.workCover} src='images/work/noble-fighter/noble-fighter-cover.png'/>
            </motion.a> 
            <motion.a 
                initial={{ 
                    opacity: 0
                }}
                animate={{ 
                    opacity: 1
                }}
                transition={{ duration: 0.25, delay: 0.575 }}
                href='https://holoclear.xyz/' 
                target='_blank' 
                rel='noreferrer' 
                className={WorkStyle.work}
            >
                <img className={WorkStyle.workLink} src='images/global/arrow.png'/>
                <img className={WorkStyle.workCover} src='images/work/holo-clear/holo-clear-cover.png'/>
            </motion.a> 
            <motion.a 
                initial={{ 
                    opacity: 0
                }}
                animate={{ 
                    opacity: 1
                }}
                transition={{ duration: 0.25, delay: 0.625 }}
                href='https://painttoearn.io/' 
                target='_blank' 
                rel='noreferrer' 
                className={WorkStyle.work}
            >
                <img className={WorkStyle.workLink} src='images/global/arrow.png'/>
                <img className={WorkStyle.workCover} src='images/work/paint-to-earn/paint-to-earn-cover.png'/>
            </motion.a> 
            <motion.a 
                initial={{ 
                    opacity: 0
                }}
                animate={{ 
                    opacity: 1
                }}
                transition={{ duration: 0.25, delay: 0.675 }}
                href='https://www.youtube.com/watch?v=BEODs-I3Hc8' 
                target='_blank' 
                rel='noreferrer' 
                className={WorkStyle.work}
            >
                <img className={WorkStyle.workLink} src='images/global/arrow.png'/>
                <img className={WorkStyle.workCover} src='images/work/souls-of-the-fallen-god/souls-of-the-fallen-god-cover.png'/>
            </motion.a> 
          </div>
        </div>
    )
}