import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions';
import ProductCard from './ProductCard';
import banner from '../img/banner.png'

class Content extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  renderProductCard() {
    const { data } = this.props.products;
    return data.map(item => {
      return (
        <ProductCard
          key={item.ID}
          name={item.prodDesc}
          sku={item.prodSku}
          listPrice={parseFloat(item.listprice)}
          ourPrice={parseFloat(item.prodPrice)}
          img={item.productimg}
         />
      )
    });
  }

  render() {
    console.log(this.props.products.data);
    return (
      <div>
        <h1>Ruckus Wireless Solutions and Information</h1>
        <p>Security and Management for the New Internet</p>
        <img src={banner} className='img-fluid' alt='banner'/>
        <div className='row' style={{ marginTop: '20px' }}>
          {this.renderProductCard()}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ products }) {
  return {
    products
  }
}

export default connect(mapStateToProps, { fetchData })(Content);
