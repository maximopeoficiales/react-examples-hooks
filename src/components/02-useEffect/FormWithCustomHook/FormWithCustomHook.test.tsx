import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FormWithCustomHook from './FormWithCustomHook';

describe('<FormWithCustomHook />', () => {
  test('it should mount', () => {
    render(<FormWithCustomHook />);
    
    const formWithCustomHook = screen.getByTestId('FormWithCustomHook');

    expect(formWithCustomHook).toBeInTheDocument();
  });
});