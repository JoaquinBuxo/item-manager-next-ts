describe('Search', () => {
  it('should filter products based on search input', () => {
    cy.visit('/'); // visit the homepage

    cy.get('input[name="search"]') // select the search input
      .type('dora'); // type a product name

    cy.get('.product-card') // select the product cards
      .should('have.length', 1); // check that there's only one product card

    cy.get('.product-card') // select the product card
      .should('contain', 'dora'); // check that it contains the product name
  });
});
