import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PhotoDetail from './ThumbnailPhoto';

beforeEach(() => {
  render(
    <BrowserRouter>
      <PhotoDetail src="https://fastly.picsum.photos/id/863/200/300.jpg?hmac=4kin1N4a7dzocUZXCwLWHewLobhw1Q6_e_9E3Iy3n0I" />
    </BrowserRouter>
  );
});

it('displays an image', () => {
  const image = screen.getByRole('img');
  expect(image).toBeVisible();
});
