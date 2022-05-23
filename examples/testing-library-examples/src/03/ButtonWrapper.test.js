import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ButtonWrapper from './ButtonWrapper'

test('should handle onClick', () => {
  // Arrange
  const handleClick = jest.fn()
  const title = 'Click me'
  render(<ButtonWrapper title={title} handleClick={handleClick} />)

  // Act
  const buttonElement = screen.getByRole('button')
  // buttonElement.click()
  userEvent.click(buttonElement)

  // Assert
  expect(buttonElement).toBeInTheDocument()
  expect(buttonElement).toHaveTextContent(title)
  expect(handleClick).toHaveBeenCalledTimes(1)
})
