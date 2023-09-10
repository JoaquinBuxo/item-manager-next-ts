import { Product, Products } from '@/types/products';

// This function filters products based on a search query
export const filterProducts = (products: Products, searchQuery: string) => {
  if (searchQuery.length === 0) return products;
  const query = searchQuery.toLowerCase();

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
  if (searchQuery.length === 0) return products;
  const query = searchQuery.toLowerCase();

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

// Function that sorts the fields according to the chosen field
export const sortProducts = (products: Products, field: keyof Product) => {
  return products.sort((a, b) => {
    const valueA: string | number =
      field === 'price' ? parseFloat(a[field]) : a[field];
    const valueB: string | number =
      field === 'price' ? parseFloat(b[field]) : b[field];
    return valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
  });
};

export const getKeysFromProduct = (product: Product) => {
  return Object.keys(product);
};
