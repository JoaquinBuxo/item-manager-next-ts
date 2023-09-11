import React from 'react';
import FavoriteButton from '../Favorites/FavoriteButton';
import Image from 'next/image';
import { Product } from '@/types/products';

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className='product-card group relative'>
      <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 sm:h-50'>
        <FavoriteButton product={product} />
        <Image
          width='100'
          height='100'
          src={product.image}
          alt={product.title}
          className='h-full w-full object-cover object-center lg:h-full lg:w-full'
          loading='lazy'
        />
      </div>
      <div className='p-4 flex justify-between'>
        <div>
          <h3 className='mt-1 text-gray-500'>{product.price} EUR</h3>
          <h2 className='text-gray-700 text-ellipsis line-clamp-1'>
            {product.title}
          </h2>
          <p className='mt-1 text-sm text-gray-500 line-clamp-4'>
            {product.description}
          </p>
          <p className='mt-1 text-sm text-gray-500'>{product.email}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
