import { render, screen } from '@testing-library/react';
import App from './App';

test('teste titulo', () => {
  render(<App />);
  const testCase = document.getElementById('title');
  expect(testCase).toHaveTextContent(/John's Dashboard/);
});