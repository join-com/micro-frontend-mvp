import App, { Container } from 'next/app'
import * as React from 'react'
import { Provider } from 'react-redux'

import withReduxStore from '../src/hoc/withReduxStore'

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Container>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(MyApp)
