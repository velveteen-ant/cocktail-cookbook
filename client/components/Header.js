import React from 'react';
import headerimg from '../assets/headerimg.png';

const Header = () => {
  return (
    <header className='header'>
      {/* <img src={headerimg} className='logo' alt='header img' /> */}
      <nav className='nav'>
        {/* <img src={headerimg} className='logo' alt='header img' /> */}
        <a href='/'>HOME</a>
        <a href='/'>WISHLIST</a>
        <a href='/'>ABOUT</a>
        {/* <Button text='Login' /> */}
        <img src={headerimg} className='logo' alt='header img' />
      </nav>
    </header>
  );
};

export default Header;
