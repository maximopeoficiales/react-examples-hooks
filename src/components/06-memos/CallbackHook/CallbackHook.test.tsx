import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CallbackHook from './CallbackHook';

describe('<CallbackHook />', () => {
  test('it should mount', () => {
    render(<CallbackHook />);
    
    const callbackHook = screen.getByTestId('CallbackHook');

    expect(callbackHook).toBeInTheDocument();
  });
});