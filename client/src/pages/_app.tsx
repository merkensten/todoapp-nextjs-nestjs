import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { AppLayout } from '../components/layouts';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default MyApp;
