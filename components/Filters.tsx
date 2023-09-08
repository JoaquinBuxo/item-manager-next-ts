'use client';

import { useProducts } from '@/hooks/useProducts';
import React from 'react';
import Search from './Search';
import SortProducts from './SortProducts';

const Filters = () => {
  const { setSearchQuery } = useProducts();
  return (
    <div>
      <Search setSearchQuery={setSearchQuery} />
      <SortProducts />
    </div>
  );
};

export default Filters;
