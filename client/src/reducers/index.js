import { combineReducers } from 'redux';
import AddToCartReducer from './add_to_cart_reducer';
import fetchDataReducer from './fetch_data_reducer';

const rootReducer = combineReducers({
  cart: AddToCartReducer,
  products: fetchDataReducer
});

export default rootReducer;
