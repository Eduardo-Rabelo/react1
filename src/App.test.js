import { render, screen } from '@testing-library/react';
import { App, f2 } from './App';

test('renders learn react link', () => {
  render(<App />);
  //const linkElement = screen.getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();
  render(<f2 />);
});
