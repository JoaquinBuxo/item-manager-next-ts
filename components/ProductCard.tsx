import React from 'react';
import { Product } from '@/types';
import FavoriteButton from './FavoriteButton';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className='product-card group relative'>
      <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
        <Image
          width='100'
          height='100'
          src={product.image}
          alt={product.title}
          className='h-full w-full object-cover object-center lg:h-full lg:w-full'
        />
      </div>
      <div className='p-4 flex justify-between'>
        <div>
          <h3 className='text-sm text-gray-700'>{product.title}</h3>
          <p className='mt-1 text-sm text-gray-500'>{product.description}</p>
          <p className='mt-1 text-sm text-gray-500'>{product.email}</p>
          <p className='mt-1 text-sm text-gray-500'>{product.price}</p>
        </div>
        <FavoriteButton product={product} />
      </div>
    </div>
  );
};

export default ProductCard;
