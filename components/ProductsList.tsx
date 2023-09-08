'use client';

import { Product } from '@/types/products';
import ProductCard from './ProductCard';
import { useProducts } from '@/hooks/useProducts';

const ProductsList = () => {
  const { paginatedProducts } = useProducts();

  return (
    <>
      {paginatedProducts.length > 0
        ? paginatedProducts.map((product: Product) => (
            <ProductCard key={product.title} product={product} />
          ))
        : 'No products'}
    </>
  );
};

export default ProductsList;
