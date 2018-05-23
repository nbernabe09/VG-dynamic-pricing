import React, { Component } from 'react';
import ShoppingCartItem from './ShoppingCartItem';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ShoppingCart extends Component {
  renderPrice() {
    const { cart, deleteItem } = this.props;
    if (!cart.length) {
      return <div />
    } else {
      return cart.map(item => {
        return <ShoppingCartItem price={item.price} key={item.name} sku={item.sku} deleteItem={deleteItem} />
      });
    }
  }

  calculateTotal() {
    const { cart } = this.props;
    if (!cart.length) {
      return <div />
    } else {
      const total = cart.map(item => item.price).reduce((acc, curr) => acc + curr);
      return <h4 className='text-center'>Total: ${total}.00</h4>
    }
  }

  render() {
    const style = {
      div: {
        height: '300px',
        position: 'sticky',
        top: '20px'
      },
      cart: {
        backgroundColor: '#343a40',
        color: '#fff',
        marginTop: '20px',
        padding: '5px',
        width: '250px',
        height: '300px',
        overflowX: 'hidden',
        overflowY: 'scroll',
      }
    }
    return (
      <div style={style.div}>
        <div className='container' style={style.cart}>
          <h4 className='text-center'>My Cart</h4>
          <hr style={{ backgroundColor: '#fff' }}/>
          {this.renderPrice()}
        </div>
        {this.calculateTotal()}
      </div>
    );
  }
}

function mapStateToProps({ products, cart }) {
  return {
    products,
    cart
  }
}

export default connect(mapStateToProps, actions)(ShoppingCart);
