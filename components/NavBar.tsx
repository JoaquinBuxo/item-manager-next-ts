import React from 'react';
import FavoriteListButton from './FavoriteListButton';

const NavBar = () => {
  return (
    <nav className='bg-gray-900 p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-10'>
      <h1 className='text-2xl font-bold tracking-tight text-white'>
        CATALOGUE
      </h1>
      <FavoriteListButton />
    </nav>
  );
};

export default NavBar;
