import React from 'react';
import Content from './Content';
import Header from './Header';
import Navbar from './Navbar';
import ShoppingCart from './ShoppingCart';

const App = () => {
  return (
    <div className='container' style={{ backgroundColor: '#fff' }}>
      <Header />
      <Navbar />
      <div className='d-flex justify-content-center'>
        <Content />
        <ShoppingCart />
      </div>
    </div>
  );
}

export default App;
