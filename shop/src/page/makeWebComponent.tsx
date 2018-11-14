import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import extractAttributes from '../utils/extractAttributes'

import Page from './component'

const makeWebComponent = ({ store, persistor }) => {
  class ShopPage extends HTMLElement {
    connectedCallback() {
      this.classList.add('shop')

      const props = extractAttributes(this)

      ReactDOM.render(
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Page basename="/" {...props} />
          </PersistGate>
        </Provider>,
        this,
      )
    }

    detachedCallback() {
      ReactDOM.unmountComponentAtNode(this)
    }
  }

  customElements.define('shop-page', ShopPage)
}

export default makeWebComponent
