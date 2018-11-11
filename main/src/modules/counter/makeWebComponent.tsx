import * as React from 'react'
import * as ReactDOM from 'react-dom'

import Counter from './component'

const makeWebComponent = () => {
  class XCounter extends HTMLElement {
    connectedCallback() {
      ReactDOM.render(<Counter />, this)
    }

    detachedCallback() {
      ReactDOM.unmountComponentAtNode(this)
    }
  }

  customElements.define('x-counter', XCounter)
}

export default makeWebComponent
