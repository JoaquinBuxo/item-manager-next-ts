import React from 'react';
import { render, screen } from '@testing-library/react';
import { useProducts } from '@/hooks/useProducts';
import ProductsList from '../ProductsList';
import mockProducts from '@/mocks/products';

jest.mock('../../hooks/useProducts');

describe('ProductsList', () => {
  beforeEach(() => {
    useProducts.mockReturnValue({
      paginatedProducts: mockProducts.items,
      isProductFavorite: jest.fn(),
    });
  });

  it('renders correctly', () => {
    render(<ProductsList />);
    mockProducts.items.forEach((product) => {
      expect(screen.getByText(product.title)).toBeInTheDocument();
    });
  });

  it('renders "No products" message when there are no products', () => {
    useProducts.mockReturnValueOnce({
      paginatedProducts: [],
    });
    render(<ProductsList />);
    expect(screen.getByText('No products')).toBeInTheDocument();
  });
});
