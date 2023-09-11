describe('Pagination', () => {
  it('should navigate to the next page', () => {
    cy.visit('/');

    cy.get('.product-card')
      .first()
      .should('contain', 'bacoa')
      .then((firstProductName) => {
        cy.get('.page-button')
          .eq(1) // select second page button
          .click();

        cy.get('.product-card') // select the first product card
          .first()
          .should('not.contain', firstProductName); // check that the product name has changed
      });
  });
});
