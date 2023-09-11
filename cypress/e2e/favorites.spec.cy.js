describe('Favorites', () => {
  it('should add and remove products from favorites', () => {
    cy.visit('/');

    cy.get('.product-card') // select the first product card
      .contains('.product-card', 'Barbacoa')
      .within(() => {
        cy.get('.favorite-button') // select the favorite button
          .click(); // click the favorite button
      });

    cy.get('.favorite-list-button') // select the favorite list button
      .click();

    cy.get('.favorites-list').should('contain', 'Barbacoa');

    cy.get('.favorite-product-card')
      .first()
      .within(() => {
        cy.get('.favorite-delete-button').click();
      });

    cy.get('.favorites-list') // select the favorites list
      .should('not.contain', 'Barbacoa'); // check that it does not contain the product name
  });
});
