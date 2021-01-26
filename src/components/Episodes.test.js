import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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

test('Episodes component renders when season is selected', async () => {
  //Arrange
  const { rerender } = render(<Episodes episodes={[]} />);

  let episodeObj = screen.queryAllByTestId('episodeTest');

  rerender(<Episodes episodes={dummyEpisodes} />);

  episodeObj = screen.queryAllByTestId('episodeTest');
  expect(episodeObj).toHaveLength(2);

  // //Act
  // let dropDown = await screen.getByText(/select a season/i);
  // //Assert
  // userEvent.click(dropDown);
});
