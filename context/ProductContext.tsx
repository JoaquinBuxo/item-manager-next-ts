'use client';
import React, {
  createContext,
  useReducer,
  useEffect,
  useMemo,
  useCallback,
} from 'react';
import FavoriteList from '@/components/FavoriteList';
import { Product, Products } from '@/types/products';
import fetchProducts from '@/services/fetchProducts';
import {
  filterProducts,
  filterProductsByTitle,
  paginateProducts,
  sortProducts,
} from '@/utils/productUtils';
import { Action, ProductContextType, State } from './types';

export const ProductContext = createContext({} as ProductContextType);

const PRODUCTS_PER_PAGE = 5;

// Define initial states
const initialState: State = {
  products: [],
  favoriteProducts: new Set(),
  currentPage: 1,
  searchQuery: '',
  searchFavoriteQuery: '',
  sortField: 'title',
  open: false,
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload };
    case 'TOGGLE_FAVORITE':
      const updatedFavorites = new Set(state.favoriteProducts);
      if (action.delete || updatedFavorites.has(action.payload)) {
        updatedFavorites.delete(action.payload);
      } else {
        updatedFavorites.add(action.payload);
      }
      return { ...state, favoriteProducts: updatedFavorites };
    case 'SET_PAGE':
      return { ...state, currentPage: action.payload };
    case 'SET_QUERY':
      return { ...state, [action.target]: action.payload };
    case 'SET_SORT_FIELD':
      return { ...state, sortField: action.payload };
    case 'TOGGLE_OPEN':
      return { ...state, open: !state.open };
    default:
      return state;
  }
};

export const ProductProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchProducts().then((products) => {
      dispatch({ type: 'SET_PRODUCTS', payload: products.items });
    });
  }, []);

  const filteredAndSortedProducts = useMemo(() => {
    return sortProducts(
      filterProducts(state.products, state.searchQuery),
      state.sortField
    );
  }, [state.products, state.searchQuery, state.sortField]);

  const paginatedProducts = paginateProducts(
    filteredAndSortedProducts,
    state.currentPage,
    PRODUCTS_PER_PAGE
  );

  const numProducts = filteredAndSortedProducts.length;

  const filteredFavoriteProducts = useMemo(() => {
    return filterProductsByTitle(
      Array.from(state.favoriteProducts),
      state.searchFavoriteQuery
    );
  }, [state.favoriteProducts, state.searchFavoriteQuery]);

  const toggleOpenFavoriteList = useCallback(() => {
    dispatch({ type: 'TOGGLE_OPEN' });
  }, []);

  const toggleFavorite = useCallback((product: Product) => {
    dispatch({ type: 'TOGGLE_FAVORITE', payload: product });
  }, []);

  const isProductFavorite = useCallback(
    (product: Product) => {
      return state.favoriteProducts.has(product);
    },
    [state.favoriteProducts]
  );

  const setSearchQuery = useCallback((query: string) => {
    dispatch({ type: 'SET_QUERY', target: 'searchQuery', payload: query });
  }, []);

  const setSearchFavoriteQuery = useCallback((query: string) => {
    dispatch({
      type: 'SET_QUERY',
      target: 'searchFavoriteQuery',
      payload: query,
    });
  }, []);

  const setSortField = useCallback((field: keyof Product) => {
    dispatch({ type: 'SET_SORT_FIELD', payload: field });
  }, []);

  const deleteFavorite = useCallback((product: Product) => {
    dispatch({ type: 'TOGGLE_FAVORITE', delete: true, payload: product });
  }, []);

  const onPageChange = useCallback((page: number) => {
    dispatch({ type: 'SET_PAGE', payload: page });
  }, []);

  return (
    <ProductContext.Provider
      value={{
        paginatedProducts,
        toggleOpenFavoriteList,
        toggleFavorite,
        isProductFavorite,
        numFavoriteProducts: state.favoriteProducts.size,
        pagination: {
          numProducts,
          currentPage: state.currentPage,
          productsPerPage: PRODUCTS_PER_PAGE,
          onPageChange,
        },
        setSearchQuery,
        setSearchFavoriteQuery,
        setSortField,
        sortField: state.sortField,
        deleteFavorite,
        filteredFavoriteProducts,
      }}
    >
      {children}
      <FavoriteList open={state.open} />
    </ProductContext.Provider>
  );
};
