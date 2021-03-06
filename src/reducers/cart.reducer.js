import { ADD_TO_CART, UPDATE_CART, DELETE_FROM_CART } from "../actions/cart-actions";

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
    case DELETE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.product !== action.payload.product)
      }
    case UPDATE_CART : {
      return {
        ...state,
        cart: state.cart.map(item => item.product === action.payload.product ? action.payload : item)
      }
    }
    default:
      return state;
  }
}

export default cartReducer