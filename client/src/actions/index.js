import axios from 'axios';
import { ADD_TO_CART, DELETE_ITEM, FETCH_DATA } from './types';

export const addToCart = (name, sku, ourPrice) => async dispatch => {
  dispatch({ type: ADD_TO_CART, payload: {
    name,
    sku,
    ourPrice
  }});
}

export const deleteItem = sku => {
  return {
    type: DELETE_ITEM,
    sku
  }
}

export const fetchData = () => async dispatch => {
  const request = await axios.get('/api/data');
  const { data } = request;
  dispatch({ type: FETCH_DATA, payload: data });
}
