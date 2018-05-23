import React from 'react';

const ShoppingCartItem = props => {
  const { price, sku, deleteItem } = props;
  return (
    <h6>
      <button className='btn btn-sm btn-danger' onClick={() => deleteItem(sku)}>X</button> {sku} - ${price}.00
    </h6>
  );
}

export default ShoppingCartItem;
