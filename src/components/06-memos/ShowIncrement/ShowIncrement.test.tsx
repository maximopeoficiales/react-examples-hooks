import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ShowIncrement from './ShowIncrement';

describe('<ShowIncrement />', () => {
  test('it should mount', () => {
    render(<ShowIncrement />);
    
    const showIncrement = screen.getByTestId('ShowIncrement');

    expect(showIncrement).toBeInTheDocument();
  });
});