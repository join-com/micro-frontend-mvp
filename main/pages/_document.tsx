import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

import { Link } from 'routes'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()

    const originalRenderPage = ctx.renderPage
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      })

    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps, styles: [...initialProps.styles, ...sheet.getStyleElement()] }
  }

  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/2.1.1/system.min.js" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/2.1.1/extras/amd.min.js" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/2.1.1/extras/named-exports.min.js" />
          {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/2.1.1/extras/named-register.min.js" /> */}
          <script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.1.3/custom-elements-es5-adapter.js" />
          <style jsx global>{`
            body {
              font: 11px menlo;
            }

            .shop {
              border: 1px solid red;
              padding: 15px;
              display: inline-flex;
            }
          `}</style>
        </Head>
        <body>
          <div>
            <Link to="/">Home</Link>
            <Link route="shop">Shop</Link>
          </div>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
