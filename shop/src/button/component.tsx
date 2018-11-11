import * as React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { addProductToCart } from '../actions'

const StyledButton = styled.button<{ inCart: boolean }>`
  background-color: ${({ inCart }) => (inCart ? 'green' : 'red')};
`

const Button = ({ inCart, productId, handleClick }) => {
  return (
    <StyledButton inCart={inCart} onClick={handleClick}>
      {inCart ? 'product in cart' : 'add to basket'} {productId}
    </StyledButton>
  )
}

const mapStateToProps = ({ cart }, ownProps) => ({
  inCart: ownProps.productId in cart,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleClick: () => {
    dispatch(addProductToCart(ownProps.productId))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button)
