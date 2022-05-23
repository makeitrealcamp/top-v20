import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Counter from './Counter';

test('should handle click', () => {
  //  Arrange
  render(<Counter />);

  //  Act
  const buttonElement = screen.getByText(/add one/i);
  const parragrahElement = screen.getByRole('contentinfo');
  userEvent.click(buttonElement);

  //  Assert
  expect(parragrahElement).toHaveTextContent('You clicked 1 times');

  userEvent.click(buttonElement);
  expect(parragrahElement).toHaveTextContent('You clicked 2 times');
})
