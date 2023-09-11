'use client';

import React from 'react';
import { Product } from '@/types/products';
import { useProducts } from '@/hooks/useProducts';
import Skeleton from '../status/Skeleton';

const ProductCard = React.lazy(() => import('./ProductCard'));

const ProductsList = () => {
  const { paginatedProducts } = useProducts();

  return (
    <>
      {paginatedProducts.length > 0 ? (
        paginatedProducts.map((product: Product) => (
          <ProductCard key={product.title} product={product} />
        ))
      ) : (
        <Skeleton />
      )}
    </>
  );
};

export default ProductsList;
