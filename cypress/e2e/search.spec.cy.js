describe('Search', () => {
  it('should filter products based on search input', () => {
    cy.visit('/'); // visit the homepage

    cy.get('input[name="search"]') // select the search input
      .type('dora'); // type a product name, we have batidora and lavadora

    cy.get('.product-card') // select the product cards
      .should('have.length', 2); // check that there're two products card

    cy.get('.product-card') // select the product card
      .should('contain', 'dora'); // check that it contains the product name
  });
});
