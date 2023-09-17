import { motion } from "framer-motion";
import HomeStyle from '../styles/sections/home.module.css';

export default function Home() {
    return (
      <div className="section">
        <motion.p 
          initial={{ 
              opacity: 0,
              y: 25
          }}
          animate={{ 
              opacity: 1,
              y: 0
          }}
          transition={{ duration: 0.25, delay: 0.25 }}
          className='highlight'
        >
          Berke Kiran is an award-winning game developer and full-stack blockchain developer. 
          With over fourteen plus years of experience. 
        </motion.p>
        <motion.p
          initial={{ 
              opacity: 0,
              y: 15
          }}
          animate={{ 
              opacity: 1,
              y: 0
          }}
          transition={{ duration: 0.25, delay: 0.325 }}
        >
          He currently works at <a href='https://noblegames.com/' target='_blank' rel='noreferrer'>Noble Games</a>, DXB  
          and is available for freelance web3 projects.
        </motion.p>
        <div className={HomeStyle.links}>
          <motion.a 
            initial={{ 
                opacity: 0
            }}
            animate={{ 
                opacity: 1
            }}
            transition={{ duration: 0.25, delay: 0.325 }}
            href='https://etherscan.io/address/0x524192ce030d38ad15cfa1b98f19a55af692febd' 
            target='_blank' 
            rel='noreferrer'
          >
            Berkekiran.eth
          </motion.a>
          <motion.a 
            initial={{ 
                opacity: 0
            }}
            animate={{ 
                opacity: 1
            }}
            transition={{ duration: 0.25, delay: 0.375 }}
            href='mailto:berkekiranofficial@hotmail.com' 
            target='_blank'
            rel='noreferrer'
          >
            Email
          </motion.a>
          <motion.a 
            initial={{ 
                opacity: 0
            }}
            animate={{ 
                opacity: 1
            }}
            transition={{ duration: 0.25, delay: 0.425 }} 
            href='https://twitter.com/berkekiraneth' 
            target='_blank' 
            rel='noreferrer'
          >
            Twitter
          </motion.a>
          <motion.a 
            initial={{ 
                opacity: 0
            }}
            animate={{ 
                opacity: 1
            }}
            transition={{ duration: 0.25, delay: 0.475 }} 
            href='https://www.linkedin.com/in/berkekiran/' 
            target='_blank' 
            rel='noreferrer'
          >
            Linkedin
          </motion.a>
          <motion.a 
            initial={{ 
                opacity: 0
            }}
            animate={{ 
                opacity: 1
            }}
            transition={{ duration: 0.25, delay: 0.525 }}
            href='https://github.com/berkekiran' 
            target='_blank' 
            rel='noreferrer'
          >
            Github
          </motion.a>
        </div>
      </div>
    )
}