import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PhotosGridLayout from './PhotosGridLayout';

beforeEach(() => {
  render(
    <BrowserRouter>
      <PhotosGridLayout>
        <></>
      </PhotosGridLayout>
    </BrowserRouter>
  );
});

it('displays a main', () => {
  const main = screen.getByRole('main');
  expect(main).toBeVisible();
});
