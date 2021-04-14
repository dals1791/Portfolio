// Nextjs=====================
import Head from "next/head";
// CSS Modules ===============
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta property="og:title" content="Sean's Portfolio" />
        <meta property="og:image" content="/images/metaimage.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
