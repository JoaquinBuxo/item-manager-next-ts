import { Product, Products } from '@/types/products';

export interface ProductContextType {
  paginatedProducts: Products;
  toggleOpenFavoriteList: () => void;
  favoriteProducts: Set<Product>;
  toggleFavorite: (product: Product) => void;
  isProductFavorite: (product: Product) => boolean;
  numFavoriteProducts: number;
  pagination: PaginationInterface;
  setSearchQuery: Function;
}

export interface PaginationInterface {
  numProducts: number;
  currentPage: number;
  productsPerPage: number;
  onPageChange: (page: number) => void;
}
