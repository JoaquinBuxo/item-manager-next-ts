'use client';

import { useState } from 'react';
import { HeartIcon as HeartOutlineIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartFilledIcon } from '@heroicons/react/24/solid';

const FavoriteButton = () => {
  const [liked, setLiked] = useState(false);

  return (
    <button
      className='favorite-button text-sm font-medium text-gray-900'
      onClick={() => setLiked(!liked)}
    >
      {liked ? (
        <HeartFilledIcon className='h-7 w-7 text-gray-400' />
      ) : (
        <HeartOutlineIcon className='h-7 w-7 text-gray-400' />
      )}
    </button>
  );
};

export default FavoriteButton;
