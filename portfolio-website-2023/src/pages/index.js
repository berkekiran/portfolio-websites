import Head from 'next/head';
import Home from '../sections/home';
import Work from '../sections/work';

export default function Index() {
  return (
    <>
      <Head>
        <title>Berke Kiran</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="Berke Kiran is an award-winning game developer and full-stack blockchain developer. With over fourteen plus years of experience. He currently works at Noble Games, DXB and is available for freelance web3 projects." />
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
      
      <div className='container'>
        <Home/>
        <Work/>
      </div>
    </>
  )
}
