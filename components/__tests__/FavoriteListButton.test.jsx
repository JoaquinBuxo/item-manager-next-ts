import { render, screen } from '@testing-library/react';
import FavoriteListButton from '../Favorites/FavoriteListButton';
import { useProducts } from '@/hooks/useProducts';

jest.mock('../../hooks/useProducts');

describe('FavoriteListButton', () => {
  const mockToggleOpenFavoriteList = jest.fn();

  beforeEach(() => {
    useProducts.mockReturnValue({
      toggleOpenFavoriteList: mockToggleOpenFavoriteList,
    });
  });

  it('renders correctly', () => {
    render(<FavoriteListButton />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('calls toggleOpenFavoriteList when clicked', () => {
    render(<FavoriteListButton />);
    screen.getByRole('button').click();

    expect(mockToggleOpenFavoriteList).toHaveBeenCalled();
  });
});
