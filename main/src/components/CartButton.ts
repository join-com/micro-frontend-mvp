import styled from 'styled-components'

const CartButton = styled.button<{ showCart: boolean }>`
  background-color: ${({ showCart }) => (showCart ? 'green' : 'red')};
`

export default CartButton
