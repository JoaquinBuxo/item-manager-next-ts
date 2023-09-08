import { Product, Products } from '@/types/products';

export interface ProductContextType {
  paginatedProducts: Products;
  toggleOpenFavoriteList: () => void;
  filteredFavoriteProducts: Products;
  toggleFavorite: (product: Product) => void;
  isProductFavorite: (product: Product) => boolean;
  numFavoriteProducts: number;
  pagination: PaginationInterface;
  setSearchQuery: Function;
  deleteFavorite: Function;
  setSearchFavoriteQuery: Function;
  setSortField: Function;
  sortField: string;
}

export interface PaginationInterface {
  numProducts: number;
  currentPage: number;
  productsPerPage: number;
  onPageChange: (page: number) => void;
}
