import * as React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Cart from '../cart/component'
import CartButton from '../button/component'

function HomeRoute() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  )
}

function CartRoute() {
  return (
    <div>
      <h2>Cart</h2>
      <hr />
      <Cart />
      <CartButton productId="product3" />
    </div>
  )
}

const Page = ({ basename }) => (
  <Router basename={basename}>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={HomeRoute} />
      <Route path="/cart" component={CartRoute} />
    </div>
  </Router>
)

export default Page
