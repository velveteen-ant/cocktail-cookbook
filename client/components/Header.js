import React from 'react';
import Button from './Button';
import headerimg from '../assets/headerimg.png';

const Header = () => {
    return (
        <header className='header'>
        <img src={headerimg} className='logo' alt='header img' />
        <nav className='nav'>
            <a href='/'>Home</a>
            <a href='/'>Wishlist</a>
            <a href='/'>About</a>
            <Button text='Login' />
        </nav>
        </header>
    )
}

export default Header
