import { render, screen } from '@testing-library/react';
import FullPhoto from './FullPhoto';

beforeEach(() => {
  render(
    <FullPhoto
      src="https://fastly.picsum.photos/id/863/200/300.jpg?hmac=4kin1N4a7dzocUZXCwLWHewLobhw1Q6_e_9E3Iy3n0I"
      id={'1'}
    />
  );
});

it('displays an image', () => {
  const image = screen.getByRole('img');
  expect(image).toBeVisible();
});

it('displays a button', () => {
  const button = screen.getByRole('button');
  expect(button).toBeVisible();
});
