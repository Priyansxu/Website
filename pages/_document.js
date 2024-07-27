import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#a5a5a5" />
        <meta name="description" content="Priyanshu" />
        <meta name="author" content="Ordinary guy from parallel world." />
        <meta name="keywords" content="Futuristic Portfolio" />

        <meta property="og:title" content="Priyanshu" />
        <meta property="og:description" content="Ordinary guy from parallel world." />
  
        <meta property="og:url" content="https://pusxoo.vercel.app" />
        <meta property="og:site_name" content="Priyanshu" />

        <link rel="canonical" href="https://pusxoo.vercel.app" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}