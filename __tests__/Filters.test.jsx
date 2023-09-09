import { render, screen, fireEvent } from '@testing-library/react';
import Filters from '../components/Filters';
import { useProducts } from '../hooks/useProducts';

jest.mock('../hooks/useProducts');

describe('Filters', () => {
  const mockSetSearchQuery = jest.fn();

  beforeEach(() => {
    useProducts.mockReturnValue({
      setSearchQuery: mockSetSearchQuery,
    });
  });

  it('renders correctly', () => {
    render(<Filters />);

    expect(screen.getByPlaceholderText('Search Product')).toBeInTheDocument();
  });

  it('calls setSearchQuery when search input changes', () => {
    render(<Filters />);
    const searchInput = screen.getByPlaceholderText('Search Product');
    fireEvent.change(searchInput, { target: { value: 'test' } });

    expect(mockSetSearchQuery).toHaveBeenCalledWith('test');
  });
});
