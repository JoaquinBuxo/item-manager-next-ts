import React from 'react';
import { render, screen } from '@testing-library/react';
import FavoriteList from '../FavoriteList';
import { useProducts } from '@/hooks/useProducts';
import mockProducts from '@/mocks/products';

jest.mock('../../hooks/useProducts');

describe('FavoriteList', () => {
  const mockToggleOpenFavoriteList = jest.fn();
  const mockSetSearchFavoriteQuery = jest.fn();

  beforeEach(() => {
    useProducts.mockReturnValue({
      filteredFavoriteProducts: mockProducts.items,
      toggleOpenFavoriteList: mockToggleOpenFavoriteList,
      setSearchFavoriteQuery: mockSetSearchFavoriteQuery,
    });
  });

  it('renders correctly', () => {
    render(<FavoriteList open={true} />);

    expect(screen.getByText('Favorite Products')).toBeInTheDocument();
    expect(screen.getByText(mockProducts.items[0].title)).toBeInTheDocument();
  });
});
