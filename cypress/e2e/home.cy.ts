describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the featured projects section', () => {
    cy.get('h2').contains('Featured Projects');
  });

  it('should display some featured projects', () => {
    cy.get('#projects ul li').should('have.length.greaterThan', 0);
  });

  it('should navigate to the projects page when "View All Projects" is clicked', () => {
    cy.get('a').contains('View All Projects').click();
    cy.url().should('include', '/projects');
  });
});
