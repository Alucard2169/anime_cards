
import Layout from '@/components/Layout';
import { FilterContextProvider } from '@/context/FilterContext';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FilterContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </FilterContextProvider>
  );
}
