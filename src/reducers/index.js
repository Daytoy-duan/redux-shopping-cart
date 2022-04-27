import { combineReducers } from 'redux'
import productReducer  from './product.reducer'
import cartReducer from './cart.reducer'

const allReducers = {
    productReducer: productReducer,
    cartReducer: cartReducer
}

const rootReducer = combineReducers(allReducers)

export default rootReducer