import React from 'react';
import { HeartIcon } from '@heroicons/react/24/outline';

const FavoriteListButton = () => {
  return (
    <button className='text-white flex items-center'>
      <HeartIcon className='h-8 w-8 text-white' />
      <span className=' px-2 py-1 text-white'>0</span>
    </button>
  );
};

export default FavoriteListButton;
