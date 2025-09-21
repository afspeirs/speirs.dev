describe('Home', () => {
  it('should navigate to /', () => {
    cy.visit('/');
    cy.url().should('include', '/');
  });
});

describe('Projects', () => {
  it('should navigate to /projects', () => {
    cy.visit('/projects');
    cy.url().should('include', '/projects');
  });

  it('should navigate to /projects/speirs-dev', () => {
    cy.visit('/projects/speirs-dev');
    cy.url().should('include', '/projects/speirs-dev');
  });
});

describe('Tags', () => {
  it('should navigate to /tags', () => {
    cy.visit('/tags');
    cy.url().should('include', '/tags');
  });

  it('should navigate to /tags/svelte', () => {
    cy.visit('/tags/svelte');
    cy.url().should('include', '/tags/svelte');
  });
});

describe('About', () => {
  it('should navigate to /about', () => {
    cy.visit('/about');
    cy.url().should('include', '/about');
  });
});
