'use client';

import { useProducts } from '@/hooks/useProducts';
import React from 'react';
import Search from './Search';

const Filters = () => {
  const { setSearchQuery } = useProducts();
  return (
    <div>
      <Search setSearchQuery={setSearchQuery} />
    </div>
  );
};

export default Filters;
