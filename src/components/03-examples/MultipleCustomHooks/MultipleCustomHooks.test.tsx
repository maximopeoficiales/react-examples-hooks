import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MultipleCustomHooks from './MultipleCustomHooks';

describe('<MultipleCustomHooks />', () => {
  test('it should mount', () => {
    render(<MultipleCustomHooks />);
    
    const multipleCustomHooks = screen.getByTestId('MultipleCustomHooks');

    expect(multipleCustomHooks).toBeInTheDocument();
  });
});