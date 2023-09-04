import { Product } from '@/types';
import ProductCard from './ProductCard';

const fetchProducts = () => {
  return fetch(
    'https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/items.json'
  ).then((data) => data.json());
};

export default async function ProductsList() {
  const products = await fetchProducts();

  return products.items.map((product: Product, index: number) => (
    <ProductCard key={index} product={product} />
  ));
}