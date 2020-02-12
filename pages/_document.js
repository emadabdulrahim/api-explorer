import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              @font-face {
                font-family: 'sf-mono';
                src: url('/sf-mono.woff2');
                font-weight: medium;
                font-display: auto;
                font-style: normal;
              }
            `,
          }}
        ></style>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
