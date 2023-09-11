import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { useProducts } from '@/hooks/useProducts';
import ProductsList from '../Products/ProductsList';
import mockProducts from '@/mocks/products';

jest.mock('../../hooks/useProducts');

describe('ProductsList', () => {
  beforeEach(() => {
    useProducts.mockReturnValue({
      paginatedProducts: mockProducts.items,
      isProductFavorite: jest.fn(),
    });
  });

  it('renders correctly', async () => {
    render(<ProductsList />);
    await waitFor(async () =>
      expect(screen.getByText('Test Product 1')).toBeInTheDocument()
    );
  });
});
