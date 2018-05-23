import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';

class ProductCard extends Component {
  render() {
    const { img, name, listPrice, ourPrice, sku } = this.props;
    const productImage = `http://${img}`;

    return (
      <div className="card col-sm-4" style={{ width: '18rem', border: 'none' }}>
        <img className="card-img-top img-fluid" src={productImage} alt={name}/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">SKU#: {sku}</p>
          <p className='text-danger'>List Price: $<del>{listPrice}.00</del></p>
          <p><b>Our Price: ${ourPrice}.00</b></p>
        </div>
        <div className='card-body'>
          <button className='btn btn-sm btn-outline-info' onClick={() => this.props.addToCart(name, sku, ourPrice)}>ADD TO CART</button>
        </div>
      </div>
    )
  }
}

export default connect(null, actions)(ProductCard);
