import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/shabnam-font/5.0.1/font-face.min.css"
          integrity="sha512-K7kg/b/uwKLejlClSl2m2CDutNLO7w6Wh8R7X2921f6TSs/q+MuhKlTHbM9/8dvN5TK7Y9q2VV6pNtyVKdEKJQ=="
        />
      </Head>
      <body dir="rtl">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
