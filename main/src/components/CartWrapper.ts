import styled from 'styled-components'

const CartWrapper = styled.div<{ showCart: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  padding: 15px;
  min-width: 10px;
  min-height: 10px;
  background-color: ${({ showCart }) => (showCart ? 'green' : 'blue')};
`

export default CartWrapper
