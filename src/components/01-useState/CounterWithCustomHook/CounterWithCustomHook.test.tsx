import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CounterWithCustomHook from './CounterWithCustomHook';

describe('<CounterWithCustomHook />', () => {
  test('it should mount', () => {
    render(<CounterWithCustomHook />);
    
    const counterWithCustomHook = screen.getByTestId('CounterWithCustomHook');

    expect(counterWithCustomHook).toBeInTheDocument();
  });
});