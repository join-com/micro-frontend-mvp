import Head from 'next/head'

import { Root } from '../src/Root'

export default () => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/2.1.1/system.min.js" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/2.1.1/extras/amd.min.js" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/2.1.1/extras/named-exports.min.js" />
      {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/2.1.1/extras/named-register.min.js" /> */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.1.3/custom-elements-es5-adapter.js" />
    </Head>
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
    <Root />
  </>
)
