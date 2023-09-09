import { render, screen, fireEvent } from '@testing-library/react';
import { useProducts } from '../hooks/useProducts';
import Pagination from '../components/Pagination';

jest.mock('../hooks/useProducts');

describe('Pagination', () => {
  const mockOnPageChange = jest.fn();
  const numProducts = 20;
  const productsPerPage = 10;

  beforeEach(() => {
    useProducts.mockReturnValue({
      pagination: {
        numProducts,
        productsPerPage,
        onPageChange: mockOnPageChange,
      },
    });
  });

  it('renders correctly', () => {
    render(<Pagination />);
    const pagination = screen.getByLabelText('Pagination');
    expect(pagination).toBeInTheDocument();
  });

  it('renders page number buttons', () => {
    render(<Pagination />);
    const numPages = Math.ceil(numProducts / productsPerPage);
    for (let i = 1; i <= numPages; i++) {
      const pageButton = screen.getByText(i.toString());
      expect(pageButton).toBeInTheDocument();
    }
  });

  it('calls onPageChange function when page button is clicked', () => {
    render(<Pagination />);
    const pageButton = screen.getByText('1');
    fireEvent.click(pageButton);
    expect(mockOnPageChange).toHaveBeenCalledWith(1);
  });

  it('does not render when there is only one page', () => {
    useProducts.mockReturnValueOnce({
      pagination: {
        numProducts: productsPerPage,
        productsPerPage,
        onPageChange: mockOnPageChange,
      },
    });
    render(<Pagination />);
    const pagination = screen.queryByLabelText('Pagination');
    expect(pagination).not.toBeInTheDocument();
  });
});
