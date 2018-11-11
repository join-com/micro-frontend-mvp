import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import Button from './component'

type MountPoint = HTMLElement | HTMLDivElement

const makeWebComponent = ({ store, persistor }) => {
  class XButton extends HTMLElement {
    mountPoint!: MountPoint

    static get observedAttributes() {
      return ['product-id']
    }

    attributeChangedCallback(attr, oldValue, newValue) {
      console.log({ attr, oldValue, newValue })
    }

    connectedCallback() {
      console.log('connectedCallback@XButton')

      this.mountPoint = this

      const shadowDom = this.hasAttribute('shadow-dom')

      if (shadowDom) {
        this.mountPoint = document.createElement('div')

        this.attachShadow({ mode: 'open' }).appendChild(this.mountPoint)
      }

      this.mountPoint.classList.add('shop')

      this.render()
    }

    render() {
      const productId = this.getAttribute('product-id')!

      ReactDOM.render(
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Button productId={productId} />
          </PersistGate>
        </Provider>,
        this.mountPoint,
      )
    }

    detachedCallback() {
      ReactDOM.unmountComponentAtNode(this)
    }
  }

  customElements.define('shop-button', XButton)
}

export default makeWebComponent
