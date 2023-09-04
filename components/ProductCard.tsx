import React from 'react';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className='product-card'>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>{product.email}</p>
      <p>{product.price}</p>
      <button>Favorite</button>
    </div>
  );
};

export default ProductCard;
