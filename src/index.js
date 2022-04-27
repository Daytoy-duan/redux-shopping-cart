import  store from './store'
import { addToCart, deleteFromCart, updateCart }  from './actions/cart-actions'

// 构建函数跟踪改变的state
let unsubscribe = store.subscribe(()=>
  console.log(store.getState())
)

store.dispatch(addToCart('Coffee 500gm', 1, 250));
store.dispatch(addToCart('Flour 1kg', 2, 110));
store.dispatch(addToCart('Juice 2L', 1, 250));

store.dispatch(deleteFromCart('Coffee 500gm'));
store.dispatch(updateCart('Coffee 500gm', 6, 250));

unsubscribe()