import React from 'react';
import Script from 'next/script';
import '../styles/global/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-BNJD95SZ52"
      />
      <Script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-BNJD95SZ52');
        `}
      </Script>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
