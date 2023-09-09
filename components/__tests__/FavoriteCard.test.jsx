import React from 'react';
import { render, screen } from '@testing-library/react';
import mockProducts from '@/mocks/products';
import FavoriteCard from '../FavoriteCard';

describe('FavoriteCard', () => {
  const mockProduct = mockProducts.items[0];
  it('renders correctly', () => {
    render(<FavoriteCard product={mockProduct} />);

    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
    expect(screen.getByAltText(mockProduct.title)).toBeInTheDocument();
  });
});
