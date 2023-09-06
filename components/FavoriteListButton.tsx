'use client';

import React from 'react';
import { HeartIcon } from '@heroicons/react/24/outline';
import { useFavoriteProducts } from '@/hooks/useFavoriteProducts';

const FavoriteListButton = () => {
  const { openFavoriteProducts } = useFavoriteProducts();

  return (
    <button
      className='text-white flex items-center'
      onClick={openFavoriteProducts}
    >
      <HeartIcon className='h-8 w-8 text-white' />
      <span className=' px-2 py-1 text-white'>0</span>
    </button>
  );
};

export default FavoriteListButton;
