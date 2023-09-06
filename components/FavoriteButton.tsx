'use client';

import { useFavoriteProducts } from '@/hooks/useFavoriteProducts';
import { HeartIcon as HeartOutlineIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartFilledIcon } from '@heroicons/react/24/solid';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

const FavoriteButton: React.FC<ProductCardProps> = ({ product }) => {
  const { toggleFavorite, isProductFavorite } = useFavoriteProducts();

  return (
    <button
      className='favorite-button text-sm font-medium text-gray-900'
      onClick={() => toggleFavorite(product)}
    >
      {isProductFavorite(product) ? (
        <HeartFilledIcon className='h-7 w-7 text-gray-400' />
      ) : (
        <HeartOutlineIcon className='h-7 w-7 text-gray-400' />
      )}
    </button>
  );
};

export default FavoriteButton;
