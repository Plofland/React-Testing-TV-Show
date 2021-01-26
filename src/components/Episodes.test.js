import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../App';
import Episodes from './Episodes';

const dummyEpisodes = [
  {
    name: 'This Episode'
  },
  {
    name: 'That Episode'
  }
];

test('Episodes component renders', () => {
  render(<Episodes episodes={[]} />);
});

test('Episodes component renders with no season selected', () => {
  //Arrange
  render(<Episodes episodes={[]} />);

  //Act
  let episodeObj = screen.queryAllByTestId('episodeTest');

  //Assert
  expect(episodeObj).toStrictEqual([]);
});

test('Episodes component renders when Episodes state is changed', async () => {
  //Arrange
  const { rerender } = render(<Episodes episodes={[]} />);
  //Act
  let episodeObj = screen.queryAllByTestId('episodeTest');

  rerender(<Episodes episodes={dummyEpisodes} />);

  episodeObj = screen.queryAllByTestId('episodeTest');
  expect(episodeObj).toHaveLength(2);
});

test('Episodes Dropdown menu can be clicked', async () => {
  //Arrange
  render(<App />);
  //Act
  let dropDown = await screen.findByText(/Select a season/i);
  //Assert
  userEvent.click(dropDown);
});
