import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RealExampleRef from './RealExampleRef';

describe('<RealExampleRef />', () => {
  test('it should mount', () => {
    render(<RealExampleRef />);
    
    const realExampleRef = screen.getByTestId('RealExampleRef');

    expect(realExampleRef).toBeInTheDocument();
  });
});