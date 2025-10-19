describe('Projects page', () => {
  beforeEach(() => {
    cy.visit('/projects');
  });

  it('should display a list of projects', () => {
    cy.get('ul[role="list"] li').should('have.length.greaterThan', 0);
  });

  it('should navigate to a project page when a project is clicked', () => {
    cy.get('ul[role="list"] li a').first().click();
    cy.url().should('include', '/projects/');
    cy.get('h2').should('not.be.empty');
  });
});
