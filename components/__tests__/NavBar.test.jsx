import { render, screen } from '@testing-library/react';
import NavBar from '../NavBar';

describe('NavBar', () => {
  it('renders correctly', () => {
    render(<NavBar />);
    const navBar = screen.getByRole('navigation');
    expect(navBar).toBeInTheDocument();
    expect(screen.getByText('CATALOGUE')).toBeInTheDocument();
  });

  it('renders FavoriteListButton', () => {
    render(<NavBar />);
    const favoriteListButton = screen.getByRole('button');
    expect(favoriteListButton).toBeInTheDocument();
  });
});
