import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./components/Particle', () => () => <div data-testid='particles' />);
jest.mock('./components/ScrollToTop', () => () => null);
jest.mock('./components/Home/Type', () => () => <div>Machine Learning Engineer</div>);

test('renders the portfolio identity and navigation', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { name: /i'm ankit kumar/i })
  ).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /projects/i })).toBeInTheDocument();
});
