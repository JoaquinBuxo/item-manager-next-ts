import { Product, Products } from '@/types/products';

// This function filters products based on a search query
export const filterProducts = (products: Products, searchQuery: string) => {
  const query = searchQuery.toLowerCase();
  if (query.length === 0) return products;

  return products.filter(
    (product) =>
      product.title.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.price.toLowerCase().includes(query) ||
      product.email.toLowerCase().includes(query)
  );
};

export const filterProductsByTitle = (
  products: Products,
  searchQuery: string
) => {
  const query = searchQuery.toLowerCase();
  if (query.length === 0) return products;

  return products.filter((product) =>
    product.title.toLowerCase().includes(query)
  );
};

// This function will paginate the list of products
export const paginateProducts = (
  products: Products,
  currentPage: number,
  productsPerPage: number
) => {
  const startIndex = (currentPage - 1) * productsPerPage;
  return products.slice(startIndex, startIndex + productsPerPage);
};
