import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useProducts } from '@/hooks/useProducts';
import SortProducts from '../Filters/SortProducts';

jest.mock('../../hooks/useProducts');

describe('SortProducts', () => {
  const mockSetSortField = jest.fn();
  const sortField = 'title';

  beforeEach(() => {
    useProducts.mockReturnValue({
      sortField,
      setSortField: mockSetSortField,
    });
  });

  it('renders correctly', () => {
    const { getByText } = render(<SortProducts />);
    expect(getByText('Sort by')).toBeInTheDocument();
  });

  it('calls setSortField when a sort field is selected', () => {
    const { getByRole, getByText } = render(<SortProducts />);
    fireEvent.click(getByRole('button'));
    fireEvent.click(getByText('price'));
    expect(mockSetSortField).toHaveBeenCalledWith('price');
  });
});
