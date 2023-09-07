import { ProductsResponse } from '@/types/products';

const fetchProducts = async (): Promise<ProductsResponse> => {
  const response = await fetch(
    'https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/items.json'
  );

  if (!response.ok) {
    throw new Error('Error fetching products');
  }

  return response.json();
};

export default fetchProducts;
