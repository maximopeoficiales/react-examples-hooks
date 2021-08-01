import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoForm from './TodoForm';

describe('<TodoForm />', () => {
  test('it should mount', () => {
    render(<TodoForm />);
    
    const todoForm = screen.getByTestId('TodoForm');

    expect(todoForm).toBeInTheDocument();
  });
});