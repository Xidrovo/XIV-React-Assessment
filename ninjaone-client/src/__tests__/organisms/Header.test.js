import React from 'react';
import { render } from '@testing-library/react';
import Header from '@organisms/Header';

describe('Header component', () => {
  test('renders that an image with an alt description renders.', () => {
    const { getByAltText } = render(<Header />);
    expect(getByAltText('ninja one logo')).toBeInTheDocument();
  });
});
