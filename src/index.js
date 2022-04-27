import  store from './store'
import addToCart  from './actions/ADD_TO_CART'

// 构建函数跟踪改变的state
let unsubscribe = store.subscribe(()=>
  console.log(store.getState())
)

store.dispatch(addToCart('Coffee 500gm', 1, 250));
store.dispatch(addToCart('Flour 1kg', 2, 110));
store.dispatch(addToCart('Juice 2L', 1, 250));

unsubscribe()