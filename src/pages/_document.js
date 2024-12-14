// _document.js
import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Asynchronous Script Example */}
        <Script
          src="https://example.com/some-script.js"
          strategy="afterInteractive" // or 'lazyOnload'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
