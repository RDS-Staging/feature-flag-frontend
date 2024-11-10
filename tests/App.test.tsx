import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders the app component', () => {
  render(<App />);

  //check if navbar exists
  expect(screen.getByTestId('navbar')).toBeInTheDocument();
});
