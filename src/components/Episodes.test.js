import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../App';
import Episodes from './Episodes';

test('App renders without errors', () => {
  render(<App />);
});

test('Episodes component renders with no season selected', () => {
  render(<Episodes episodes={[]} />);
});

test('Episodes component renders when season is selected', () => {
  //Arrange
  render(<Episodes episodes{})
  //Act
  //Assert
});
