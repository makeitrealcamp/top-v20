/// <reference types="Cypress" />

describe('my first e2e test', () => {
  beforeEach(() => {
    cy.viewport('iphone-x', 'landscape');
    cy.visit('/');
  })

  it('succesfuly render the page header', () => {
    cy.contains('Emoji Search');
  });

  it('renders the lis of emojis', () => {
    cy.get('[data-cy="emoji-row"]').should('have.length', 20);
  })

  it('allows user to seach for an emoji', () => {
    // Arrange
    const searchText = 'joy';

    // Act
    cy.get('[data-cy="emoji-search-input"]').type(searchText);

    // Assert
    cy.get('[data-cy="emoji-row"]').should('have.length', 3);

    cy.contains('Joy');
    cy.contains('Joy Cat');
    cy.contains('Joystick');

    cy.get('[data-cy="emoji-search-input"]').clear().type('cactus');
    cy.get('[data-cy="emoji-row"]').should('have.length', 1);

    cy.contains('Cactus');
  })

  it.skip('is a very long test', () => {
    cy.wait(10_000)
  })

  it('shows a "emoji not found" message', () => {
    // Arrange
    const searchText = 'emoji that does not exist';

    // Act
    cy.get('[data-cy="emoji-search-input"]').type(searchText);

    // Assert
    cy.get('[data-cy="emoji-row"]').should('have.length', 0);
    cy.contains('Emojis not found');
    cy.contains('Try searching for something else');
  })



})
