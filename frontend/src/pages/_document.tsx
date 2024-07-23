import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head />
        <div>
          <Main />
          <NextScript />
        </div>
      </Html>
    );
  }
}

export default MyDocument;
