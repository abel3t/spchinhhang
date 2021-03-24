import Document, { Head, Html, Main, NextScript } from 'next/document';

class AppDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/public/favicon.ico"/>
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
