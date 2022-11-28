import { Html, Head, Main, NextScript } from "next/document";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="icon"
          type="png"
          href="https://substackcdn.com/image/fetch/w_170,c_limit,f_auto,q_auto:best,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F96efac98-1403-4973-aefd-48f665c5cea2_1280x1280.png"
        ></link>
      </Head>
      <Nav />
      <body>
        <Main />
        <NextScript />
      </body>
      <Footer />
    </Html>
  );
}
