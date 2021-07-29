import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FocusScreen from './FocusScreen';

describe('<FocusScreen />', () => {
  test('it should mount', () => {
    render(<FocusScreen />);
    
    const focusScreen = screen.getByTestId('FocusScreen');

    expect(focusScreen).toBeInTheDocument();
  });
});