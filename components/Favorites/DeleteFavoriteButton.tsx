'use client';

import { useProducts } from '@/hooks/useProducts';
import { TrashIcon } from '@heroicons/react/24/solid';
import { Product } from '@/types/products';

type DeleteFavoriteButtonProps = {
  product: Product;
};

const DeleteFavoriteButton: React.FC<DeleteFavoriteButtonProps> = ({
  product,
}) => {
  const { deleteFavorite } = useProducts();

  return (
    <button
      className=' top-2 right-2 bg-white rounded-full p-1 favorite-button text-sm font-medium text-gray-900'
      onClick={() => deleteFavorite(product)}
    >
      <TrashIcon className='h-7 w-7 text-gray-400' />
    </button>
  );
};

export default DeleteFavoriteButton;
