import React from 'react';
import { render, screen } from '@testing-library/react';

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
  //or
  //expect(episodeObj).toHaveLength(0)
});

test('Episodes component renders when Episodes state is changed', () => {
  //Arrange
  render(<Episodes episodes={[]} />);
  const { rerender } = render(<Episodes episodes={[]} />);
  //Act
  let episodeObj = screen.queryAllByTestId('episodeTest');

  rerender(<Episodes episodes={dummyEpisodes} />);

  //Assert
  episodeObj = screen.queryAllByTestId('episodeTest');
  expect(episodeObj).toHaveLength(2);
});
