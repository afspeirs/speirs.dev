describe('Tags page', () => {
  beforeEach(() => {
    cy.visit('/tags');
  });

  it('should display a list of tags', () => {
    cy.get('ul[role="list"] li').should('have.length.greaterThan', 0);
  });

  it('should navigate to a tag page when a tag is clicked', () => {
    cy.get('ul[role="list"] li a').first().click();
    cy.url().should('include', '/tags/');
    cy.get('h2').should('not.be.empty');
  });
});
