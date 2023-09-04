import React from 'react';
import { Product } from '@/types';
import FavoriteButton from './FavoriteButton';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className='product-card'>
      <Image width='100' height='100' src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>{product.email}</p>
      <p>{product.price}</p>
      <FavoriteButton />
    </div>
  );
};

export default ProductCard;
