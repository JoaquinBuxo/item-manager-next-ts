'use client';

import { Product } from '@/types/products';
import ProductCard from './ProductCard';
import { useProducts } from '@/hooks/useProducts';

const ProductsList = () => {
  const { paginatedProducts } = useProducts();

  return (
    <>
      {paginatedProducts?.map((product: Product) => (
        <ProductCard key={product.title} product={product} />
      ))}
    </>
  );
};

export default ProductsList;
