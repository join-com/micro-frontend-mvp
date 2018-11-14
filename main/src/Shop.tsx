import * as React from 'react'
import NoSSR from 'react-no-ssr'

import TestContainer from './container/TestContainer'
import CartWrapper from './components/CartWrapper'
import CartButton from './components/CartButton'

import initWebComponents from './initWebComponents'

const { useState } = React as any

initWebComponents()

export const Shop = () => {
  const [showCart, setShowCart] = useState(true)

  return (
    <div>
      <CartWrapper showCart={showCart}>
        <NoSSR>{showCart && <shop-cart />}</NoSSR>
      </CartWrapper>

      <CartButton showCart={showCart} onClick={() => setShowCart(!showCart)}>
        {showCart ? 'hide cart' : 'show cart'}
      </CartButton>

      <NoSSR>
        <x-counter />
      </NoSSR>

      <p>test some text</p>

      {/* <shop-button shadow-dom product-id="productA" /> */}

      <NoSSR>
        <shop-button product-id="productA" />
        <shop-button product-id="productB" />
      </NoSSR>

      <div>
        <TestContainer />
      </div>

      <NoSSR>
        <shop-page basename="/shop" />
      </NoSSR>
    </div>
  )
}

export default Shop
