import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Small from './Small';

describe('<Small />', () => {
  test('it should mount', () => {
    render(<Small />);
    
    const small = screen.getByTestId('Small');

    expect(small).toBeInTheDocument();
  });
});