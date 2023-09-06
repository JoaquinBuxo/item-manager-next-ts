'use client';

import React, { createContext, useState } from 'react';
import FavoriteList from '@/components/FavoriteList';

interface FavoriteProductsContextType {
  openFavoriteProducts: () => void;
  closeFavoriteProducts: () => void;
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

  const openFavoriteProducts = () => setOpen(true);
  const closeFavoriteProducts = () => setOpen(false);

  return (
    <FavoriteProductsContext.Provider
      value={{
        openFavoriteProducts,
        closeFavoriteProducts,
      }}
    >
      {children}
      <FavoriteList open={open} />
    </FavoriteProductsContext.Provider>
  );
};
