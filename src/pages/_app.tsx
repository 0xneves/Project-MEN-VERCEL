import { MetaMaskProvider } from 'metamask-react';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';

// import MetaMaskAccountProvider from '../components/MetaMaskAccountProvider';
import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <MetaMaskProvider>
      <ThemeProvider attribute="class" defaultTheme="light">
        <Component {...pageProps} />
      </ThemeProvider>
    </MetaMaskProvider>
  );
};

export default MyApp;
