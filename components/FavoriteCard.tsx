import React from 'react';
import Image from 'next/image';
import { Product } from '@/types/products';
import DeleteFavoriteButton from './DeleteFavoriteButton';

type FavoriteCardProps = {
  product: Product;
};

const FavoriteCard: React.FC<FavoriteCardProps> = ({ product }) => {
  return (
    <li key={product.title} className='flex py-6'>
      <div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
        <Image
          width='100'
          height='100'
          src={product.image}
          alt={product.title}
          className='h-full w-full object-cover object-center'
        />
      </div>

      <div className='ml-4 flex flex-1 flex-col'>
        <div className='flex justify-between text-base font-medium text-gray-900'>
          <h3>{product.title}</h3>
        </div>
        <DeleteFavoriteButton product={product} />
      </div>
    </li>
  );
};

export default FavoriteCard;
