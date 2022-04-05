import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import axios from 'axios';

import App from './App';

jest.mock('axios');

const getFakeResponse = ({ expectedDefinition }) => (
  {
    data: [
      {
        meanings: [
          {
            definitions: [
              {
                definition: expectedDefinition
              }
            ]
          }
        ]
      }
    ]
  }
)

const fillFormAndSubmit = (value = 'casa') => {
  const inputElement = screen.getByLabelText(/word/i);
  const buttonElement = screen.getByRole('button', { name: /search/i });

  userEvent.type(inputElement, value);
  userEvent.click(buttonElement);
}

beforeEach(() => {
  axios.get.mockClear();
})

test('renders Free dictionary title', () => {
  // Arrange
  render(<App />)

  // Act
  const linkElement = screen.getByText(/free dictionary/i);

  // Assert
  expect(linkElement).toBeInTheDocument();
});

test('should renders the form elements', () => {
  // Arrange
  render(<App />)

  // Act
  const inputElement = screen.getByLabelText(/word/i);
  const buttonElement = screen.getByRole('button', { name: /search/i });

  expect(inputElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});

// PARA USAR ESTE TOCA COMENTAR EL MOCK DE AXIOS
// test('should search a word', async () => {
//   const inputElement = screen.getByLabelText(/word/i);
//   const buttonElement = screen.getByRole('button', { name: /search/i });

//   userEvent.type(inputElement, 'cat');
//   userEvent.click(buttonElement);

//   const wordMeaningElement = await screen.findByText(/an animal of the family Felidae:/i);

//   expect(wordMeaningElement).toBeInTheDocument();
// });


test('should search a word with mock', async () => {
  // Arrange
  const expectedDefinition = 'An animal of the family Felidae:';
  axios.get.mockReturnValueOnce(getFakeResponse({ expectedDefinition }));
  render(<App />)

  // Act
  fillFormAndSubmit('cat')
  const wordMeaningElement = await screen.findByText(expectedDefinition);

  // Assert
  expect(wordMeaningElement).toBeInTheDocument();
});


test('should not exist string when search is finish', async () => {
  // Arrange
  const expectedDefinition = 'An animal of the family Felidae:';
  axios.get.mockReturnValueOnce(getFakeResponse({ expectedDefinition }));
  render(<App />)

  // Act
  fillFormAndSubmit('cat')
  const loadingElement = screen.queryByText(/loading/i);

  // Assert
  expect(loadingElement).toBeInTheDocument();
  await screen.findByText(expectedDefinition);
  expect(loadingElement).not.toBeInTheDocument();
})
