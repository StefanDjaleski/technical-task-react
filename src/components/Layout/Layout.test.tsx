import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { FAVORITES, PHOTOS } from '../../constants/constants';
import Layout from './Layout';

beforeEach(() => {
  render(
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
});

it('displays a header', () => {
  const header = screen.getByRole('banner');
  expect(header).toBeVisible();
});

it('contains photos link with appropriate path', () => {
  const photosLink = screen.getByText(PHOTOS);
  expect(photosLink).toBeVisible();
  expect(photosLink).toHaveAttribute('href', '/');
});

it('contains favorites link with appropriate path', () => {
  const photosLink = screen.getByText(FAVORITES);
  expect(photosLink).toBeVisible();
  expect(photosLink).toHaveAttribute('href', '/favorites');
});
