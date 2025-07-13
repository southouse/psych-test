import { render, screen } from '@testing-library/react';
import App from './App';

test('renders psychological test title', () => {
  render(<App />);
  const titleElement = screen.getByText(/"에겐남" vs "테토남" 심리테스트/i);
  expect(titleElement).toBeInTheDocument();
});
