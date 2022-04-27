// 添加商品
export const ADD_TO_CART = 'ADD_TO_CART';
// 删除商品
export const DELETE_FROM_CART = 'DELETE_FROM_CART';
// 修改商品
export const UPDATE_CART = 'UPDATE_CART';

// 添加商品函数
export function addToCart(product, quantity, unitCost) {
    return {
        type: ADD_TO_CART,
        payload: {
            product,
            quantity,
            unitCost
        }
    }
}

// 更新商品函数
export function updateCart(product, quantity, unitCost) {
    return {
      type: UPDATE_CART,
      payload: {
        product,
        quantity,
        unitCost
      }
    }
}
  

// 删除商品函数
export function deleteFromCart(product) {
    return {
      type: DELETE_FROM_CART,
      payload: {
        product
      }
    }
  }

