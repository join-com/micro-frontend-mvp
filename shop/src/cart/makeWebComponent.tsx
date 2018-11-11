import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import Cart from './component'

const makeWebComponent = ({ store, persistor }) => {
  class ShopCart extends HTMLElement {
    connectedCallback() {
      this.classList.add('shop')

      ReactDOM.render(
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Cart />
          </PersistGate>
        </Provider>,
        this,
      )
    }

    detachedCallback() {
      ReactDOM.unmountComponentAtNode(this)
    }
  }

  customElements.define('shop-cart', ShopCart)
}

export default makeWebComponent
