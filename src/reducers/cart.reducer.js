import { ADD_TO_CART } from "../actions/ADD_TO_CART";

// 定义初始值
const initState = {
  cart: [
    {
      product: 'bread 700g',
      quantity: 2,
      unitCost: 90
    },
    {
      product: 'milk 500ml',
      quantity: 1,
      unitCost: 47
    }
  ]
}


function cartReducer(state = initState,action){
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart,action.payload]
      }
    default:
      return state;
  }
}

export default cartReducer