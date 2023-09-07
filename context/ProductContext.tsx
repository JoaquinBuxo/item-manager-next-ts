'use client';

import React, { createContext, useState, useEffect } from 'react';
import FavoriteList from '@/components/FavoriteList';
import { Product, Products } from '@/types/products';
import fetchProducts from '@/services/fetchProducts';

interface ProductContextType {
  paginatedProducts: Products;
  toggleOpenFavoriteList: () => void;
  favoriteProducts: Products;
  toggleFavorite: (product: Product) => void;
  isProductFavorite: (product: Product) => boolean;
  numFavoriteProducts: number;
  pagination: PaginationInterface;
}

interface PaginationInterface {
  numProducts: number;
  currentPage: number;
  productsPerPage: number;
  onPageChange: (page: number) => void;
}

export const ProductContext = createContext({} as ProductContextType);

const PRODUCTS_PER_PAGE = 5;

export const ProductProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [products, setProducts] = useState<Products>([]);
  const [open, setOpen] = useState(false);
  const [favoriteProducts, setFavoriteProducts] = useState<Products>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchProducts().then((products) => {
      setProducts(products.items);
    });
  }, []);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const numProducts = products.length;

  const paginate = (
    products: Products,
    pageNumber: number,
    productsPerPage: number
  ) => {
    const startIndex = (pageNumber - 1) * productsPerPage;
    return products.slice(startIndex, startIndex + productsPerPage);
  };

  const paginatedProducts = paginate(products, currentPage, PRODUCTS_PER_PAGE);

  const toggleOpenFavoriteList = () => setOpen(!open);

  const isProductFavorite = (product: Product) =>
    favoriteProducts.some((p: Product) => p.title === product.title);

  const toggleFavorite = (product: Product) => {
    if (isProductFavorite(product)) {
      setFavoriteProducts(
        favoriteProducts.filter((p: Product) => p.title !== product.title)
      );
    } else {
      setFavoriteProducts([...favoriteProducts, product]);
    }
  };

  const numFavoriteProducts = favoriteProducts.length;

  return (
    <ProductContext.Provider
      value={{
        paginatedProducts,
        toggleOpenFavoriteList,
        favoriteProducts,
        toggleFavorite,
        isProductFavorite,
        numFavoriteProducts,
        pagination: {
          numProducts,
          currentPage,
          productsPerPage: PRODUCTS_PER_PAGE,
          onPageChange,
        },
      }}
    >
      {children}
      <FavoriteList open={open} />
    </ProductContext.Provider>
  );
};
