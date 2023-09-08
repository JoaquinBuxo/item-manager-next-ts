'use client';

import React, { createContext, useState, useEffect } from 'react';
import FavoriteList from '@/components/FavoriteList';
import { Product, Products } from '@/types/products';
import fetchProducts from '@/services/fetchProducts';
import {
  filterProducts,
  filterProductsByTitle,
  paginateProducts,
} from '@/utils/productUtils';
import { ProductContextType } from './types';

export const ProductContext = createContext({} as ProductContextType);

const PRODUCTS_PER_PAGE = 5;

export const ProductProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [products, setProducts] = useState<Products>([]);
  const [open, setOpen] = useState(false);
  const [favoriteProducts, setFavoriteProducts] = useState<Set<Product>>(
    new Set()
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchFavoriteQuery, setSearchFavoriteQuery] = useState<string>('');

  useEffect(() => {
    fetchProducts().then((products) => {
      setProducts(products.items);
    });
  }, []);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const toggleOpenFavoriteList = () => {
    setOpen(!open);
    setSearchFavoriteQuery('');
  };

  // Function to check if a product is in the favorites list
  const isProductFavorite = (product: Product) => favoriteProducts.has(product);

  // Function to add or remove a product from the list of favorites
  const toggleFavorite = (product: Product) => {
    if (isProductFavorite(product)) {
      favoriteProducts.delete(product);
    } else {
      favoriteProducts.add(product);
    }
    const updatedFavorites = new Set(favoriteProducts);
    setFavoriteProducts(updatedFavorites);
  };

  const numFavoriteProducts = favoriteProducts.size;

  const filteredProducts = filterProducts(products, searchQuery);

  const paginatedProducts = paginateProducts(
    filteredProducts,
    currentPage,
    PRODUCTS_PER_PAGE
  );

  const numProducts = filteredProducts.length;

  const deleteFavorite = (product: Product) => {
    favoriteProducts.delete(product);
    const updatedFavorites = new Set(favoriteProducts);
    setFavoriteProducts(updatedFavorites);
  };

  const filteredFavoriteProducts = filterProductsByTitle(
    Array.from(favoriteProducts),
    searchFavoriteQuery
  );

  return (
    <ProductContext.Provider
      value={{
        paginatedProducts,
        toggleOpenFavoriteList,
        filteredFavoriteProducts,
        toggleFavorite,
        isProductFavorite,
        numFavoriteProducts,
        pagination: {
          numProducts,
          currentPage,
          productsPerPage: PRODUCTS_PER_PAGE,
          onPageChange,
        },
        setSearchQuery,
        deleteFavorite,
        setSearchFavoriteQuery,
      }}
    >
      {children}
      <FavoriteList open={open} />
    </ProductContext.Provider>
  );
};
