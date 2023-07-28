
import Layout from '@/components/Layout';
import '@/styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence>
      <Layout>
        
        <Component {...pageProps} />

      </Layout>
    </AnimatePresence>
  );
}
