import * as React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

const mapStateToPros = ({ cart }) => ({ cart })

const Wrapper = styled.div<{ inCart: boolean }>`
  background-color: ${({ inCart }) => (inCart ? 'green' : 'red')};
`

const CartContainer = connect(mapStateToPros)(({ cart }: any) => {
  const productsInCart = Object.keys(cart)

  const itemsInCart = productsInCart.reduce((acc, cartKey) => acc + cart[cartKey], 0)

  return (
    <Wrapper inCart={Boolean(productsInCart.length)}>
      Items in cart ({productsInCart.length} / {itemsInCart})
    </Wrapper>
  )
})

const Cart = () => {
  return <CartContainer />
}

export default Cart
