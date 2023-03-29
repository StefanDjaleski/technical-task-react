import { render, screen } from '@testing-library/react';
import Loader from './Loader';

beforeEach(() => {
  render(<Loader />);
});

it('displays a loader', () => {
  const loader = screen.getByTestId('loader');
  expect(loader).toBeVisible();
});

it('displays a background', () => {
  const background = screen.getByTestId('background');
  expect(background).toBeVisible();
});
