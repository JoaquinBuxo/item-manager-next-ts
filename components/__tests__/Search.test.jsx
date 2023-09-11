import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Search from '../Filters/Search';

describe('Search', () => {
  it('calls setSearchQuery with input value on change', () => {
    const setSearchQuery = jest.fn();
    const { getByPlaceholderText } = render(
      <Search setSearchQuery={setSearchQuery} />
    );
    const input = getByPlaceholderText('Search Product');

    fireEvent.change(input, { target: { value: 'test' } });

    expect(setSearchQuery).toHaveBeenCalledWith('test');
  });

  it('does not call setSearchQuery when input value is empty', () => {
    const setSearchQuery = jest.fn();
    const { getByPlaceholderText } = render(
      <Search setSearchQuery={setSearchQuery} />
    );
    const input = getByPlaceholderText('Search Product');

    fireEvent.change(input, { target: { value: '' } });

    expect(setSearchQuery).not.toHaveBeenCalled();
  });
});
