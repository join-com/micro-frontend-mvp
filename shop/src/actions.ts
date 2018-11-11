import { ADD_PRODUCT_TO_CART } from './constants'

export const addProductToCart = (productId: string) => {
  return {
    type: ADD_PRODUCT_TO_CART,
    productId,
  }
}
