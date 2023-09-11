'use client';

import React from 'react';
import { HeartIcon } from '@heroicons/react/24/outline';
import { useProducts } from '@/hooks/useProducts';

const FavoriteListButton = () => {
  const { toggleOpenFavoriteList, numFavoriteProducts } = useProducts();

  return (
    <button
      className='text-white flex items-center'
      onClick={toggleOpenFavoriteList}
    >
      <HeartIcon className='h-8 w-8 text-white' />
      <span className='favorite-list-button px-2 py-1 text-white'>
        {numFavoriteProducts}
      </span>
    </button>
  );
};

export default FavoriteListButton;
