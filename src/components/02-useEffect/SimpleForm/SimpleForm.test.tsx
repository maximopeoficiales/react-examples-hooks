import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SimpleForm from './SimpleForm';

describe('<SimpleForm />', () => {
  test('it should mount', () => {
    render(<SimpleForm />);
    
    const simpleForm = screen.getByTestId('SimpleForm');

    expect(simpleForm).toBeInTheDocument();
  });
});