import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useProducts } from '../hooks/useProducts';
import DeleteFavoriteButton from '../components/DeleteFavoriteButton';

jest.mock('../hooks/useProducts');

describe('DeleteFavoriteButton', () => {
  const mockDeleteFavorite = jest.fn();
  const product = {
    title: 'Test Product',
    description: 'This is a test product',
    price: '10',
    email: 'mail@example.com',
    image: 'https://example.com/image.jpg',
  };

  beforeEach(() => {
    useProducts.mockReturnValue({
      deleteFavorite: mockDeleteFavorite,
    });
  });

  it('renders correctly', () => {
    const { getByRole } = render(<DeleteFavoriteButton product={product} />);
    const button = getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('calls deleteFavorite function from useProducts hook when clicked', () => {
    const { getByRole } = render(<DeleteFavoriteButton product={product} />);
    const button = getByRole('button');
    fireEvent.click(button);
    expect(mockDeleteFavorite).toHaveBeenCalledWith(product);
  });
});
