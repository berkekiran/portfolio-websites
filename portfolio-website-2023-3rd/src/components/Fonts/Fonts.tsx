import { Inter_Tight } from 'next/font/google';
const inter_tight = Inter_Tight({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  display: 'swap'
});

const Fonts: React.FC = () => (
  <style jsx global>{`
    :root {
      --font-base: ${inter_tight.style.fontFamily};
    }
  `}</style>
);

export default Fonts;
