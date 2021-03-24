import Document, { Head, Html, Main, NextScript } from 'next/document';

class AppDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="spchinhhang"/>
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-FDPZC2NF21"/>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-FDPZC2NF21')
              `
            }}
          />
        </Head>
        <body className="loading">
        <Main/>
        <NextScript/>
        </body>
      </Html>
    );
  }
}

export default AppDocument;
