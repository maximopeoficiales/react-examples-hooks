import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Memorize from './Memorize';

describe('<Memorize />', () => {
  test('it should mount', () => {
    render(<Memorize />);
    
    const memorize = screen.getByTestId('Memorize');

    expect(memorize).toBeInTheDocument();
  });
});