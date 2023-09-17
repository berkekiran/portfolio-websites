import Head from 'next/head';
import { motion } from "framer-motion";
import IndexStyle from '../styles/index.module.css';
import Links from '../data/links.json';

export default function Index() {
  return (
    <>
      <Head>
        <title>Berke Kiran - Game & Blockchain Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="Hey! I'm Berke, an award-winning Game and Blockchain Developer. With a strong focus on blockchain technology, I have successfully completed numerous projects, showcasing my versatility and expertise in this rapidly evolving field. From contributing to cutting-edge Web3 & NFT projects, DAOs, and dApp development to elevating front-end and back-end functionalities for projects, I consistently deliver innovative solutions that drive tangible impact. With a rich background in blockchain development, I thrive in overcoming technical challenges, underscoring my knowledge and proficiency. Furthermore, I possess a proven track record in crafting captivating 2D and 3D games using Unity and C#, adept at creating immersive experiences across various art styles and codebases. " />
        <meta name="keywords" content="berke kiran, berke kıran, Berke Kiran, Berke KIRAN, berkekiran, berkekıran, web, web2, web3, developer, web developer, web3 developer, blockchain, blockchain developer, full-stack, full-stack developer, game, game developer, unity, unreal engine, ethereum, avalanche, binance smart chain, near protocol, mobile game developer, blockchain game developer"></meta>
        <meta name="author" content="Berke Kiran" />
        <link rel="apple-touch-icon" sizes="57x57" href="images/favicon/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="images/favicon/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="images/favicon/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="images/favicon/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="images/favicon/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="images/favicon/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="images/favicon/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="images/favicon/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="images/favicon/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192"  href="images/favicon/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="images/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="images/favicon/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="images/favicon/favicon-16x16.png" />
        <link rel="manifest" href="manifest.json" />
        <meta name="msapplication-TileColor" content="#070809" />
        <meta name="msapplication-TileImage" content="images/favicon/ms-icon-144x144.png" />
        <meta name="theme-color" content="#070809" />
      </Head>
      
      <div className={IndexStyle.container}>
        <div className={IndexStyle.wrapper}>
          <div className={IndexStyle.header}>
            <img alt='berke-kiran-profile-photo' src='images/global/berke-kiran.webp'/>
            <div>
              Hey! {`I'm`} Berke
              <br/>
              <span className={IndexStyle.title}>Game & Blockchain Developer</span>
            </div>
          </div>
          <div className={IndexStyle.links}>
            {
              Links && Links.map((link, id) => {
                return(
                  <a key={id} href={link.link} target='_blank' rel="noreferrer">
                    <div className={IndexStyle.linkWrapper}>
                      <img alt={IndexStyle.linkHead.toLowerCase() + '-icon'} src={link.img}/>
                      <div className={IndexStyle.linkInfo}>
                        <div className={IndexStyle.linkHead}>{link.head}</div>
                        <div className={IndexStyle.linkDesc}>{link.desc}</div>
                      </div>
                      <img alt='arrow-icon' className={IndexStyle.linkArrow} src='images/global/arrow.svg'/>
                    </div>
                  </a>
                )
              })
            }
          </div>
          <a className={IndexStyle.contact} href='mailto:berkekiranofficial@hotmail.com' target='_blank' rel="noreferrer"><img alt='email-icon' src='images/global/email.svg'/></a>
        </div>
      </div>
    </>
  )
} 