'use client';

import { useProducts } from '@/hooks/useProducts';
import { HeartIcon as HeartOutlineIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartFilledIcon } from '@heroicons/react/24/solid';
import { Product } from '@/types/products';

type FavoriteButtonProps = {
  product: Product;
};

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ product }) => {
  const { toggleFavorite, isProductFavorite } = useProducts();

  return (
    <button
      className='absolute top-2 right-2 bg-white rounded-full p-1 favorite-button text-sm font-medium text-gray-900'
      onClick={() => toggleFavorite(product)}
    >
      {isProductFavorite(product) ? (
        <HeartFilledIcon
          data-testid='filled-heart-icon'
          className='h-7 w-7 text-gray-400'
        />
      ) : (
        <HeartOutlineIcon
          data-testid='outline-heart-icon'
          className='h-7 w-7 text-gray-400'
        />
      )}
    </button>
  );
};

export default FavoriteButton;
