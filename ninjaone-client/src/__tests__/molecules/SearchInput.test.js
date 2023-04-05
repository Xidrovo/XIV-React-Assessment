import React from 'react';
import { render } from '@testing-library/react';
import SearchInput from '../../components/molecules/SearchInput';

describe('SearchInput molecule', () => {
  test('renders without crashing', () => {
    const { getByRole, getByTestId } = render(<SearchInput />);
    expect(getByRole('textbox')).toBeInTheDocument();
    expect(getByTestId('search-icon-id')).toBeInTheDocument();
  });

  test('placeholder is the apropiate', () => {
    const expectedPlaceholder = 'Search';

    const { getByPlaceholderText } = render(<SearchInput />);
    const inputElement = getByPlaceholderText(expectedPlaceholder);
    expect(inputElement).toBeInTheDocument();
  });
});
