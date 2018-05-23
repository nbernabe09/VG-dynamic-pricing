import { ADD_TO_CART, DELETE_ITEM } from '../actions/types';

function AddToCardReducer(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [
        ...state,
        {
        name: action.payload.name,
        sku: action.payload.sku,
        price: action.payload.ourPrice
        }
      ];
    case DELETE_ITEM:
      return state.filter(item => item.sku !== action.sku);
    default:
      return action;
  }
}

export default AddToCardReducer;
