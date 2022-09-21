import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { AppLayout } from '../components/layouts';
import { AuthProvider } from '../context/AuthContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </AuthProvider>
  );
}

export default MyApp;
