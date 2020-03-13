import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const activeStyle = { color: '#f15b2a' };

  return (
    <header className='masthead mb-auto'>
      <nav>
        <NavLink to='/' activeStyle={activeStyle} exact>Home</NavLink>{' | '}
        <NavLink to='/products' activeStyle={activeStyle} exact>Products</NavLink>{' | '}
        <NavLink to='/about' activeStyle={activeStyle} exact>About</NavLink>
      </nav>
    </header>
  )
}

export default Header;