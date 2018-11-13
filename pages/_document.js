import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <Head>
          <meta charset="utf-8" />
          <meta http-equiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <style>{`
            body { 
              margin: 0 
            }
            .p5Canvas {
              position: fixed;
              top: 0;
              left: 0;
            }
          `}</style>
          <script async src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.1/p5.min.js" />
          <script async src="/static/p5-sketch.js" />
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
