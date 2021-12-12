import React from 'react';
import footerimg from '../assets/footerimg.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <img src={footerimg} className='footerimg' alt='footer img' />
      <h6>&copy; COCKTAIL COOKBOOK 2021</h6>
    </footer>
  );
};

export default Footer;
