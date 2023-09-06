'use client';

import FavoriteList from '@/components/FavoriteList';
import { Product } from '@/types';
import React, { createContext, useState } from 'react';

interface FavoriteProductsContextType {
  toggleOpenFavoriteList: () => void;
  favoriteProducts: Product[];
  toggleFavorite: (product: Product) => void;
  isProductFavorite: (product: Product) => boolean;
  numFavoriteProducts: number;
}

export const FavoriteProductsContext = createContext(
  {} as FavoriteProductsContextType
);

export const FavoriteProductsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);
  const [favoriteProducts, setFavoriteProducts] = useState<Product[]>([]);

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
    <FavoriteProductsContext.Provider
      value={{
        toggleOpenFavoriteList,
        favoriteProducts,
        toggleFavorite,
        isProductFavorite,
        numFavoriteProducts,
      }}
    >
      {children}
      <FavoriteList open={open} />
    </FavoriteProductsContext.Provider>
  );
};
