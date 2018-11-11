import { ADD_PRODUCT_TO_CART } from './constants'

const initialState = {}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      const { productId } = action

      return {
        ...state,
        [productId]: (state[productId] || 0) + 1,
      }
  }

  return state
}

export default cartReducer
