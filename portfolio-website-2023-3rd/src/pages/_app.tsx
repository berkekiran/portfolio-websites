import type { AppProps } from 'next/app';
import { Provider as ReduxProvider } from 'react-redux';
import { AnimatePresence } from 'framer-motion'
import Fonts from '@/components/Fonts/Fonts';
import Layout from '@/components/Layout/Layout';
import { store } from '@/redux/store';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <AnimatePresence>
            <ReduxProvider store={store}>
                <>
                    <Fonts />
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </>
            </ReduxProvider>
        </AnimatePresence>
    );
}
