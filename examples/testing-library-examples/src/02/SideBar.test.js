import { render, screen } from '@testing-library/react'

import SideBar from './SideBar'

test('should renders some links', () => {
  // Arrange
  const items = [
    {
      title: 'Home',
      href: '/'
    },
    {
      title: 'About',
      href: '/about'
    }
  ]
  render(<SideBar items={items} />)

  // Act
  const anchorElements = screen.getAllByRole('navigation')

  // Assert
  expect(anchorElements.length).toBe(items.length);
  expect(anchorElements[0]).toHaveTextContent(items[0].title);
  expect(anchorElements[0]).toHaveAttribute('href', items[0].href);
})
