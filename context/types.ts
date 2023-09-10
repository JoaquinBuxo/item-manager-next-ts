import { Product, Products } from '@/types/products';

export interface State {
  products: Products;
  favoriteProducts: Set<Product>;
  currentPage: number;
  searchQuery: string;
  searchFavoriteQuery: string;
  sortField: keyof Product;
  open: boolean;
}

export type Action =
  | { type: 'SET_PRODUCTS'; payload: Products }
  | { type: 'TOGGLE_FAVORITE'; payload: Product; delete?: boolean }
  | { type: 'SET_PAGE'; payload: number }
  | {
      type: 'SET_QUERY';
      target: 'searchQuery' | 'searchFavoriteQuery';
      payload: string;
    }
  | { type: 'SET_SORT_FIELD'; payload: keyof Product }
  | { type: 'TOGGLE_OPEN' };

export interface ProductContextType {
  paginatedProducts: Products;
  sortField: keyof Product;
  filteredFavoriteProducts: Products;
  numFavoriteProducts: number;
  pagination: PaginationInterface;
  toggleOpenFavoriteList: () => void;
  toggleFavorite: (product: Product) => void;
  isProductFavorite: (product: Product) => boolean;
  setSearchQuery: (query: string) => void;
  setSearchFavoriteQuery: (query: string) => void;
  setSortField: (field: keyof Product) => void;
  deleteFavorite: (product: Product) => void;
}

export interface PaginationInterface {
  numProducts: number;
  currentPage: number;
  productsPerPage: number;
  onPageChange: (page: number) => void;
}
