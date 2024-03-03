import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {List} from './pages/List';

test('renders learn react link List', () => {
  render(<App />);
  const listElement = screen.getByText(/List/i);
  expect(listElement).toBeInTheDocument();

});