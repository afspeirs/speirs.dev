describe('Layout', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  describe('Header', () => {
    it('should display the header', () => {
      cy.get('header').should('be.visible');
    });

    it('should display the logo', () => {
      cy.get('header a[aria-label="Home"]').should('be.visible');
    });
  });

  describe('Footer', () => {
    it('should display the footer', () => {
      cy.get('footer').should('be.visible');
    });

    it('should display the copyright notice', () => {
      const year = new Date().getFullYear();
      cy.get('footer').contains(`© 2017-${year} Andrew Speirs`);
    });

    it('should display the theme toggle button', () => {
      cy.get('footer button').should('be.visible');
    });

    it('should toggle the theme', () => {
      cy.get('html').then(($html) => {
        const initialTheme = $html.attr('data-theme');

        cy.get('footer button').click();

        cy.get('html').should('not.have.attr', 'data-theme', initialTheme);
      });
    });
  });
});
