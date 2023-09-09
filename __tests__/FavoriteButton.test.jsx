import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import mockProducts from '@/mocks/products';
import { useProducts } from '@/hooks/useProducts';
import FavoriteButton from '../components/FavoriteButton';
import { Product } from '@/types/products';

jest.mock('../hooks/useProducts');

describe('FavoriteButton', () => {
  const mockToggleFavorite = jest.fn();
  const mockIsProductFavorite = jest.fn();
  const product = mockProducts.items[0];

  beforeEach(() => {
    useProducts.mockReturnValue({
      toggleFavorite: mockToggleFavorite,
      isProductFavorite: mockIsProductFavorite,
    });
  });

  it('renders correctly', () => {
    const { getByRole } = render(<FavoriteButton product={product} />);
    const button = getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('calls toggleFavorite function from useProducts hook when clicked', () => {
    const { getByRole } = render(<FavoriteButton product={product} />);
    const button = getByRole('button');
    fireEvent.click(button);
    expect(mockToggleFavorite).toHaveBeenCalledWith(product);
  });

  it('displays filled heart icon when product is favorite', () => {
    mockIsProductFavorite.mockReturnValue(true);
    const { getByTestId } = render(<FavoriteButton product={product} />);
    const filledHeartIcon = getByTestId('filled-heart-icon');
    expect(filledHeartIcon).toBeInTheDocument();
  });

  it('displays outline heart icon when product is not favorite', () => {
    mockIsProductFavorite.mockReturnValue(false);
    const { getByTestId } = render(<FavoriteButton product={product} />);
    const outlineHeartIcon = getByTestId('outline-heart-icon');
    expect(outlineHeartIcon).toBeInTheDocument();
  });
});
