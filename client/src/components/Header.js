import React from 'react';
import logo from '../img/ruckus-logo.png';

const Header = () => {
  return (
    <div className='row'>
      <img src={logo} className='img-fluid' alt='header'/>
    </div>
  );
}

export default Header;
