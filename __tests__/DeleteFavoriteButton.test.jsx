import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import mockProducts from '@/mocks/products';
import { useProducts } from '../hooks/useProducts';
import DeleteFavoriteButton from '../components/DeleteFavoriteButton';

jest.mock('../hooks/useProducts');

describe('DeleteFavoriteButton', () => {
  const mockDeleteFavorite = jest.fn();
  const mockIsProductFavorite = jest.fn();
  const product = mockProducts.items[0];

  beforeEach(() => {
    useProducts.mockReturnValue({
      deleteFavorite: mockDeleteFavorite,
      isProductFavorite: mockIsProductFavorite,
    });
  });

  it('renders correctly', () => {
    // Render the DeleteFavoriteButton with the mock product
    const { getByRole } = render(<DeleteFavoriteButton product={product} />);
    // Find the delete button
    const button = getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('calls deleteFavorite function from useProducts hook when clicked', () => {
    const { getByRole } = render(<DeleteFavoriteButton product={product} />);
    const button = getByRole('button');
    // Click the delete button
    fireEvent.click(button);
    expect(mockDeleteFavorite).toHaveBeenCalledWith(product);
  });
});
