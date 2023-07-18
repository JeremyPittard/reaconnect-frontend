import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:title" content="ReaConnect " />
        <meta property="og:site_name" content="ReaConnect" />
        <meta property="og:url" content="reaconnect.co" />
        <meta
          property="og:description"
          content="Seen a house you love? Let it know!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.reaconnect.co/img/logo.png"
        />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
