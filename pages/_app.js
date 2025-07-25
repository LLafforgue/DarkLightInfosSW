import '../styles/globals.css';
import Head from 'next/head';
import { ThemeProvider } from "next-themes"

function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <Head>
        <title>THEME WARS</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
