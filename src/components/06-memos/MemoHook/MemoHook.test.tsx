import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MemoHook from './MemoHook';

describe('<MemoHook />', () => {
  test('it should mount', () => {
    render(<MemoHook />);
    
    const memoHook = screen.getByTestId('MemoHook');

    expect(memoHook).toBeInTheDocument();
  });
});