import React from 'react';
import { render, screen } from '@testing-library/react';
import { useProducts } from '@/hooks/useProducts';
import ProductCard from '../ProductCard';
import mockProducts from '@/mocks/products';

jest.mock('../../hooks/useProducts');

describe('ProductCard', () => {
  const mockProduct = mockProducts.items[0];
  beforeEach(() => {
    useProducts.mockReturnValue({
      isProductFavorite: jest.fn(),
    });
  });

  it('renders correctly', () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.description)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.price + ' EUR')).toBeInTheDocument();
    expect(screen.getByText(mockProduct.email)).toBeInTheDocument();
    expect(screen.getByAltText(mockProduct.title)).toBeInTheDocument();
  });
});
